module tokenizer
    implicit none

    contains
    function nextSym(input, cursor) result(lexeme)
        character(len=*), intent(in) :: input
        integer, intent(inout) :: cursor
        character(len=:), allocatable :: lexeme

        if ("foo" == input(cursor:cursor + 2)) then !Foo
            allocate( character(len=3) :: lexeme)
            lexeme = input(cursor:cursor + 2)
            cursor = cursor + 3
            return
        end if
        if ("bar" == input(cursor:cursor + 2)) then
            allocate( character(len=3) :: lexeme)
            lexeme = input(cursor:cursor + 2)
            cursor = cursor + 3
            return
        end if
        print *, "error lexico en col ", cursor, ', "'//input(cursor:cursor)//'"'
    end function nextSym
end module tokenizer
