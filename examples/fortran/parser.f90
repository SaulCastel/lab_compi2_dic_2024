program parser
    use tokenizer
    implicit none

    character(len=*), parameter :: input = "foobarfoo"
    integer :: cursor
    
    cursor = 0

    print *, nextSym(input, cursor)

end program parser