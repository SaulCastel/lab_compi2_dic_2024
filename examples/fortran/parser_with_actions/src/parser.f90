module parser
    implicit none
    character(len=:), allocatable, private :: input
    integer, private :: savePoint, lexemeStart, cursor

    interface toStr
        module procedure intToStr
        module procedure strToStr
    end interface

    contains

    function parse(str) result(res)
        character(len=:), allocatable :: str
        character(len=:), allocatable :: res

        input = str
        cursor = 1

        res = peg_grammar()
    end function parse

    function peg_grammar() result (res)
        character(len=:), allocatable :: res
        character(len=:), allocatable :: expr00
        character(len=:), allocatable :: expr01
        integer :: i

        savePoint = cursor
        do i = 0, 1
            select case(i)
            case(0)
                cursor = savePoint
                lexemeStart = cursor
                if (.not. acceptString('bar')) cycle
                expr00 = consumeInput()

                expr01 = peg_baz()

                if (.not. acceptEOF()) cycle

                res = toStr(expr00)
                res = res//toStr(expr01)
                exit
            case default
                call pegError()
            end select
        end do
    end function peg_grammar

    function peg_baz() result(res)
        character(len=:), allocatable :: res
        character(len=:), allocatable :: expr00
        integer :: i

        savePoint = cursor
        do i = 0, 1
            select case(i)
            case(0)
                cursor = savePoint
                lexemeStart = cursor
                if(.not. acceptString('baz')) then
                    cycle
                end if
                expr00 = consumeInput()

                res = toStr(expr00)
                exit
            case default
                call pegError()
            end select
        end do
    end function peg_baz

    function acceptString(str) result(accept)
        character(len=*) :: str
        logical :: accept
        integer :: offset

        offset = len(str) - 1
        if (str /= input(cursor:cursor + offset)) then
            accept = .false.
            return
        end if
        cursor = cursor + len(str)
        accept = .true.
    end function acceptString

    function acceptRange(bottom, top) result(accept)
        character(len=1) :: bottom, top
        logical :: accept

        if(.not. (input(cursor:cursor) >= bottom .and. input(cursor:cursor) <= top)) then
            accept = .false.
            return
        end if
        cursor = cursor + 1
        accept = .true.
    end function acceptRange

    function acceptSet(set) result(accept)
        character(len=1), dimension(:) :: set
        logical :: accept

        if(.not. (findloc(set, input(cursor:cursor), 1) > 0)) then
            accept = .false.
            return
        end if
        cursor = cursor + 1
        accept = .true.
    end function acceptSet

    function acceptPeriod() result(accept)
        logical :: accept

        if (cursor > len(input)) then
            accept = .false.
            return
        end if
        cursor = cursor + 1
        accept = .true.
    end function acceptPeriod

    function acceptEOF() result(accept)
        logical :: accept

        if(.not. cursor > len(input)) then
            accept = .false.
            return
        end if
        accept = .true.
    end function acceptEOF

    function consumeInput() result(substr)
        character(len=:), allocatable :: substr

        substr = input(lexemeStart:cursor - 1)
    end function consumeInput

    subroutine pegError()
        print '(A,I1,A)', "Error at ", cursor, ": '"//input(cursor:cursor)//"'"

        call exit(1)
    end subroutine pegError

    function intToStr(int) result(cast)
        integer :: int
        character(len=31) :: tmp
        character(len=:), allocatable :: cast

        write(tmp, '(I0)') int
        cast = trim(adjustl(tmp))
    end function intToStr

    function strToStr(str) result(cast)
        character(len=:), allocatable :: str
        character(len=:), allocatable :: cast

        cast = str
    end function strToStr
end module parser