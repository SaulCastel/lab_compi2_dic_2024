program parser
    use tokenizer
    implicit none

    character(len=*), parameter :: input = "foobarfoofoobar"
    character(len=:), allocatable :: lexeme
    integer :: cursor

    cursor = 1
    do while (lexeme /= "EOF" .and. lexeme /= "ERROR")
        lexeme = nextSym(input, cursor)
        print *, lexeme
    end do
end program parser