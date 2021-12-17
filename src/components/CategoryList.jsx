import {CategoryItem} from './CategoryItem';

function CategoryList({catalog = []}){

        return <div className='list'>
        {
            catalog.length !== 0 ?
                (catalog.map(el => (
                    <CategoryItem key={el.idCategory} {...el}/>
                ))) : <h3>Nothing there</h3>
            
            
        }
    </div>
}

export {CategoryList}