// What is PORT number?
/* 1.In computer networking, a port is a logical
   construct that is used to identify a specific process
   or service running on a computer or other networked device.

   2.Each port is associated with a unique number, 
   called a port number, which allows data to be routed to the 
   to the correct application or service.

   3.A port number is always associated with a network address of 
   a host, such as an IP address, and the type of transport protocol used 
   for communication.
   4.Specific port numbers are reserved to identify specific services so that
   arriving packet can be easily forwarded to a running applications.



    Differents types of PORT number
    There are 65,535 available port numbers, which can be classified into 3 different types:
    1.Well-know Port
    2.Registered Port
    3.Dynamic or Private Port



    Well-know Port:-
    .Well-Know Ports are port numbers that have been assigned by
    .the Internet Assigned Numbers Authority(IANA)to specific services or Protcols.
    .These ports range from 0 to 1023 and are reserved for use by well-know services and applications.
    Example:-
    .Port 80:HTTP (HyperText Transfer Protocal)
    .port 443:HTTPS(HTTP Secure)
    .port 25:SMTP(Simple Mail Tranfer Protocol)
    .port 53:DNS(Domain Name System)
    Port 110: POP3(Post office Protocol version 3) and port 143:IMAP (Internet Message Access Protocol)



    // Registered Port:-
    .Registered Ports are ports numbers that have been assigned by Internet Assigned
    Numbers Authority(IANA) to specific services or protocols.
    .These ports range from 1024 to 49151 and are typically used by applications 
    or services that are not considered well-know

    .Some Examples:
    -Port 8080: HTTP alternate(used as a secondary web server port)
    -port 3306:MySQl (database management system)
    -port 5432:PostgreSQl (database management system)
    -port 3389:Remote Desktop Protocol (used for remote access to a computer)



    // Dynamic or Private Port:-
    it range is 49152-65553
    Examples:
    When a client program initiates a connection to a server
    program, the operating system assigns a unique dynamics port number to the client
    side of the connection.This dynamics port number is used for the duration 
    of the connection and is released when the connection is closed.
    
*/