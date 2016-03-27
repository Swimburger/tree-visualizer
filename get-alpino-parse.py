#!/usr/bin/env python
import clam.common.client
import clam.common.data
import clam.common.status
import random
import sys
import time

from clam.common.data import CLAMMetaData

class AlpinoXMLCollection(CLAMMetaData):
    attributes = {}
    name = "Alpino XML Collection"
    mimetype = 'application/zip'
    scheme = ''


#create client, connect to server.
#the latter two arguments are required for authenticated webservices, they can be omitted otherwise

clamclient = clam.common.client.CLAMClient("http://webservices-lst.science.ru.nl/alpino", "BramVanroy", "DuneA91Dan")

clamclient.register_custom_formats([ AlpinoXMLCollection ])

#Set a project name (it is recommended to include a sufficiently random naming component here, to allow for concurrent uses of the same client)

project = "get_alpino_output" + str(random.getrandbits(64))

#Now we call the webservice and create the project (in this and subsequent methods of clamclient, exceptions will be raised on errors).

clamclient.create(project)

#Get project status and specification

data = clamclient.get(project)


#Add one or more input files according to a specific input template. The following input templates are defined,
# each may allow for extra parameters to be specified, this is done in the form of Python keyword arguments to the addinputfile() method, (parameterid=value)
#inputtemplate="tokinput" #Plaintext tokenised input, one sentence per line (PlainTextFormat)
#	The following parameters may be specified for this input template:
#		encoding=...  #(StaticParameter) -   Encoding -  The character encoding of the file
#inputtemplate="untokinput" #Plaintext document (untokenised) (PlainTextFormat)
#	The following parameters may be specified for this input template:
#		encoding=...  #(StaticParameter) -   Encoding -  The character encoding of the file

clamclient.addinputfile(project, data.inputtemplate("untokinput"), "C:/xampp/htdocs/bramvanroy/projects/tree-visualizer/alpino-request-file.txt")


#Start project execution with custom parameters. Parameters are specified as Python keyword arguments to the start() method (parameterid=value)

data = clamclient.start(project)


#Always check for parameter errors! Don't just assume everything went well! Use startsafe() instead of start
#to simply raise exceptions on parameter errors.
if data.errors:
    print("An error occured: " + data.errormsg, file=sys.stderr)
    for parametergroup, paramlist in data.parameters:
        for parameter in paramlist:
            if parameter.error:
                print("Error in parameter " + parameter.id + ": " + parameter.error, file=sys.stderr)
    clamclient.delete(project) #delete our project (remember, it was temporary, otherwise clients would leave a mess)
    sys.exit(1)

#If everything went well, the system is now running, we simply wait until it is done and retrieve the status in the meantime
while data.status != clam.common.status.DONE:
    time.sleep(5) #wait 5 seconds before polling status
    data = clamclient.get(project) #get status again
    print("\tRunning: " + str(data.completion) + '% -- ' + data.statusmessage, file=sys.stderr)

#Iterate over output files
for outputfile in data.output:
    try:
        outputfile.loadmetadata() #metadata contains information on output template
    except:
        continue          
    
    outputtemplate = outputfile.metadata.provenance.outputtemplate_id
    
	#You can check this value against the following predefined output templates, and determine desired behaviour based on the output template:
	#if outputtemplate == "alpinooutput": #Alpino XML output (XML files per sentence) (AlpinoXMLCollection)
	#if outputtemplate == "foliaoutput": #FoLiA XML Output (FoLiAXMLFormat)
	#if outputtemplate == "tokoutput": #Plaintext tokenised output, one sentence per line (PlainTextFormat)
	#if outputtemplate == "alpinooutput": #Alpino XML output (XML files per sentence) (AlpinoXMLCollection)
	#if outputtemplate == "foliaoutput": #FoLiA XML Output (FoLiAXMLFormat)
	#Download the remote file

    outputfile.copy("alpino-output.xml")
    

#delete the project (otherwise it would remain on server and clients would leave a mess)

clamclient.delete(project)