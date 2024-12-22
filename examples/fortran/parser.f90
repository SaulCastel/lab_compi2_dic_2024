program parser
    use tokenizer
    implicit none

    character(len=:), allocatable :: lexeme, input
    character(len=100) :: filename
    integer :: cursor, size
    logical :: exists

    if (command_argument_count() == 0) then
	print *, "error: no input file"
	stop
    end if

    call get_command_argument(1, filename)

    inquire(file=filename, exist=exists, size=size)
    if (.not. exists) then
	print *, "error: file not found"
	stop
    end if
    allocate (character(len=size) :: input)
    open (1, file=filename, status='old', action='read', access='stream', form='unformatted')
    read (1) input

    cursor = 1
    do while (lexeme /= "EOF" .and. lexeme /= "ERROR")
        lexeme = nextSym(input, cursor)
        print *, lexeme
    end do
end program parser