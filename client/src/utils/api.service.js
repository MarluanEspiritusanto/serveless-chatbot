import axios from "axios";

export default async message => {
   try {
      const { data } = await axios.post(
         "https://dialoflowbotexample.azurewebsites.net/api/Dialogflowbot?code=r6vNnatN3X08HUoeBvAWIJS1peNVrkkBO8vINFoPOcAqqB6mOac7ig==",
         { message }
      );
      return {
         user: "bot",
         message: data.fulfillmentText
      };
   } catch (err) {
      console.log(err);
      return {
         user: "bot",
         message: "Hey, ha ocurrido un error...."
      };
   }
};
