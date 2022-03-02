const axios = require('axios');
const { aurora } = require('../db');

const api = async () => {
    const getApi= await axios.get('https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
    //console.log(getApi)
    const apiData= await getApi.data.drinks.map(e => {
       return {
            id: e.idDrink,
            name: e.strDrink,
            image: e.strDrinkThumb,
            
        }});

     return apiData;
};

// const db= async () => {
//     return await aurora.findAll();
// };


// const getAllDrinks= async () => {
//     const apiData= await api();
//     const dbData= await db();
//     const totalData= apiData.concat(dbData);
//     return totalData;
// };

async function getTodas (req, res, next){
    const { name }= req.query;
    
    try {
        const totalDrinks= await api();
    
    if(name){
        const drinkName= await totalDrinks.filter(e =>
            e.name.includes(name)
        )
        drinkName.length ?
        res.send(drinkName) :
        res.status(404).send({error: 'no se encontro el drink'})
        
    } else {
        res.status(200).send(totalDrinks)
       
    }
    } catch (error) {
        next(error)
    }
      
};   

async function getId (req, res, next){
    const { id } = req.params;

    try {
        if(id){
            const drinkId= await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);    
        const ids= await drinkId.data.drinks.map(e => {
            return {
                id: e.idDrink,
                name: e.strDrink,
                steps: e.strInstructions,
                image: e.strDrinkThumb
            }
        })
        console.log(ids)
        //let aver= ids.filter(e => e.id === id)
        return res.json(ids);
        } else {
            res.status(400).send({error: 'no se encontro el id'})
    }  
    } catch (error) {
        next(error)
    }


};



module.exports= {
    api,
    getTodas, 
    getId
};