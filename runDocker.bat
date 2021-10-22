docker run -v d:/Source/Udacity/UdacityCapstone/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash
echo cd code/square
echo zokrates compile -i square.code
echo zokrates setup
echo zokrates compute-witness -a 3 9
echo zokrates generate-proof
echo zokrates export-verifier