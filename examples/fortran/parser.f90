module parser
    implicit none
    integer, private :: cursor
    character(len=:), allocatable, private :: input

    contains

    subroutine parse(str)
        character(len=:), allocatable, intent(in) :: str

        input = str
        cursor = 1
        if (sum()) then
            print *, "Parsed input succesfully!"
        end if
    end subroutine parse

    subroutine error(expected)
        character(len=*), intent(in) :: expected

        print *, "Error: Expected "//expected//", but found "//input(cursor:cursor)
        call exit(1)
    end subroutine error

    function sum() result(accept)
        logical :: accept

        accept = .false.
        if (.not. num()) then
            call error("[0-9]")
        end if
        do while (.not. cursor > len(input))
            if (.not. num()) then
                exit
            end if
        end do

        if ('+' /= input(cursor:cursor + 0)) then
            call error("+")
        end if
        cursor = cursor + 1;

        if (.not. num()) then
            call error("[0-9]")
        end if
        do while (.not. cursor > len(input))
            if (.not. num()) then
                exit
            end if
        end do

        call EOF()

        accept = .true.
    end function sum

    function num() result(accept)
        logical :: accept

        accept = .false.
        if(input(cursor:cursor) >= '0' .and. input(cursor:cursor) <= '9' ) then
            cursor = cursor + 1
            accept = .true.
        end if
    end function num

    subroutine EOF()
        if(.not. cursor > len(input)) then
            call error("EOF")
        end if
    end subroutine EOF
end module parser