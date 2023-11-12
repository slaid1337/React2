import '../css/Form.css';
import React from 'react';
import { useForm } from 'react-hook-form';
export function FormCreateSet(){
    // const [name, setName] = useInput('');
    // const [disc, setDisc] = useInput('');
    // function handleNameChange(e){
    //     setName(e.target.value);
    // }
    // function handleDiscChange(e){
    //     setDisc(e.target.value);
    // }
    // function handleSubmit(e){
    //     e.preventDefault();
    //     console.log(name, disc);
    // }
    const [count, setCount] = React.useState(0);
    React.useEffect(()=>{
        if(count !== 0){
            console.log(`Отправка формы: ${count}`);
            alert(`Отправка формы: ${count}`);
        }
    },[count]);


    const {register, handleSubmit, formState: {errors}} = useForm({
        dafaultValues: {
            name: '',
            discription: ''
        }
    });

    console.log(errors);
    return(
        <form onSubmit={handleSubmit((data)=>{
            setCount(count+1);
            console.log(data);
        })}>
            <label className='label_1'>
                Название набора:
                <input type="text" 
                        name="name"
                        id="name"
                        {...register("name", {
                            required: "Заполните поле 'Название набора'", 
                            minLength: {
                                value: 4, 
                                message: "Название набора должно содержпть минимум 4 цифры"
                            }})}/>
                <p className='error-msg'>{errors.name?.message}</p>
            </label>
            <label className='label_2'>
                Описание:
                <textarea name="discription"
                            id='discription'
                            {...register("discription", {
                                required: "Заполните поле 'Описание набора'"
                                })} />
                <p className='error-msg'>{errors.discription?.message}</p>
            </label>
            <input className='submit1' type="submit" value="Создать сет"/>
        </form>
    );
}