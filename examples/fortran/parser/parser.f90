module parser
    implicit none
    integer, private :: cursor
    character(len=:), allocatable, private :: input, expected

    contains

    subroutine parse(str)
        character(len=:), allocatable, intent(in) :: str

        input = str
        cursor = 1
        expected = ''
        if (sum()) then
            print *, "Parsed input succesfully!"
        else
            call error()
        end if
    end subroutine parse

    subroutine error()
        if (cursor > len(input)) then
            print *, "Error: Expected "//expected//", but found <EOF>"
            call exit(1)
        end if
        print *, "Error: Expected "//expected//", but found '"//input(cursor:cursor)//"'"
        call exit(1)
    end subroutine error

    function sum() result(accept)
        logical :: accept
        integer :: i

        accept = .false.
        do i = 1, 3
            select case(i)
            case(1)
            if (.not. num()) then
                cycle
            end if
            do while (.not. cursor > len(input))
                if (.not. num()) then
                    exit
                end if
            end do

            if (.not. acceptString('+')) then
                cycle
            end if

            if (.not. num()) then
                cycle
            end if
            do while (.not. cursor > len(input))
                if (.not. num()) then
                    exit
                end if
            end do

            if (.not. acceptPeriod()) then
                cycle
            end if
            exit
            case(2)
            if(.not. letra()) then
                cycle
            end if

            if(.not. acceptString('+')) then
                cycle
            end if

            if (.not. letra()) then
                cycle
            end if
            exit
            case default
                return
            end select
        end do
        if (.not. acceptEOF()) then
            return
        end if
        accept = .true.
    end function sum

    function num() result(accept)
        logical :: accept

        accept = .false.
        if(.not. acceptRange('0', '9')) then
            expected = '[0-9]'
            return
        end if
        accept = .true.
    end function num

    function letra() result(accept)
        logical :: accept

        accept = .false.
        if(.not. acceptRange('a', 'z')) then
            expected = '[a-z]'
            return
        end if
        accept = .true.
    end function letra

    function acceptString(str) result(accept)
        character(len=*) :: str
        logical :: accept
        integer :: offset

        offset = len(str) - 1
        if (str /= input(cursor:cursor + offset)) then
            accept = .false.
            expected = str
            return
        end if
        cursor = cursor + len(str);
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
            expected = "<ANYTHING>"
            return
        end if
        cursor = cursor + 1
        accept = .true.
    end function acceptPeriod

    function acceptEOF() result(accept)
        logical :: accept

        if(.not. cursor > len(input)) then
            accept = .false.
            expected = "<EOF>"
            return
        end if
        accept = .true.
    end function acceptEOF
end module parser