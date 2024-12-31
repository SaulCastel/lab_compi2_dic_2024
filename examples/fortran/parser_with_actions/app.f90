program app
    use parser
    implicit none
    character(len=100) :: filename
    character(len=:), allocatable :: input
    character(len=:), allocatable :: result
    integer :: len
    logical :: exists

    if (command_argument_count() == 0) then
        print *, "error: no input file"
        stop
    end if

    call get_command_argument(1, filename)

    inquire(file=filename, exist=exists, size=len)
    if (.not. exists) then
        print *, "error: file is not present"
        stop
    end if
    allocate (character(len=len) :: input)
    open (1, file=filename, status='old', action='read', access='stream', form='unformatted')
    read (1) input

    result = parse(input) !guardar resultado de función en una variable
    print '(A)', result !imprimir lo que se guardó en la variable
end program app