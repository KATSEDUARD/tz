1. Run 'git clone https://github.com/KATSEDUARD/tz.git' to install the project.
2. Run 'npm install' in 'tz' directory.
3. Run 'ts-node src/bootstrap.ts' to start the server.
4. Finally, go to 'http://localhost:3000' in your web browser and follow instructions.


In the file src/constant/contractAddresses.ts I listed the addresses of the tokens manually due to the fact that I could not find an alternative solution to get all the addresses of the tokens using the web3 api.

A sudden error may happen:
"throw new Error('Please pass numbers as strings or BN objects to avoid precision errors.');" 
I don’t know the reason why it’s happening. I try to restart a server.
