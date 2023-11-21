modify above application in such a way that after showing the message
if the message is rocord deleted, it must show in red color
if the message is deletion cancled, it must shown in green color
this requirement is done using a concept known as Property Bindig

Property Binding is used to fetch the value of a class property and use it in the HTML template.
It is done by surrounding the property of the class in [] as shown below :
<span [class]="colorClass"> Record Deleted </span>
     Here class is built in property of the span tag and colorClass is the user 
    defined property of the component class.