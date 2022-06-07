var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","My_Piku.jpeg","My_Sis.jpeg","Me_2.jpeg","My_Mom.jpeg","My_Dad.jpeg"];
var names = ["Familybook","Piku Raikwar","Pranavi Raikwar","Aryan S. Raikwar","Suchitra.Raikwar","Suryakant Raikwar"];

function update()
{
     i++;
     var numbers_of_family_member_in_array=5;
     if(i>numbers_of_family_member_in_array)
     {
        i=0;
     }
     var updatedImage = images[i];
     var updatedName = names[i];
     document.getElementById("family_member_image").src=updatedImage;
     document.getElementById("family_member_name").innerHTML=updatedName;
};