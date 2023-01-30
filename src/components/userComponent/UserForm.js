import {useForm} from "react-hook-form";
import usersService from "../../services/usersService";

const UserForm = () => {

    const {register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({mode:"all"});

    const submit= async (user)=> {
       const {users}= await usersService.post(user);
       console.log(user);
       reset();
    };

    return(
        <div>
          <form >
              Name: <input type={'text'} placeholder={'name'} {...register('name')}/>
              <br/>
              Username: <input type={'text'} placeholder={'username'} {...register('username')}/>
              <br/>
              Email: <input type={"text"} placeholder={'email'} {...register('email')}/>
              <br/>
              <button onClick={handleSubmit(submit)}>Добавити</button>
          </form>
        </div>
    )
}
export default UserForm;