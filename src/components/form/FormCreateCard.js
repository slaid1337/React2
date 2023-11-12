
export function FormCreateCard(){

    return(
        <form>
            <label>
                Передняя сторона карточки:
                <input type="text" 
                    name="fronttext"/>
            </label>
            <label className="label_2">
                Задняя сторона карточки:
                <input type="text" 
                    name="backtext"/>
            </label>
            <input className='submit' type="submit" 
                value="Создать карточку"/>
        </form>
    );
}