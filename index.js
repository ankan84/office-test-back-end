const express = require('express')

const app = express();
app.use(express.json())
const cors = require('cors')
app.use(cors())

const connection = require('./DB')
const Data = require('./Schema')

const PORT = 5000;

app.get('/',async(req,res)=>{
    try{
        res.status(200).send("back-end connected")
    }catch(e){
        res.status(400).send(e)
    }
    
})

app.get('/get/user', (req, res) => {


    connection.query(`select * from users`, (err, data) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send(data);

        }
    })




})




app.post('/create/table', (req, res) => {


    connection.query(`create table users(
        project_no varchar(100),
        project_name varchar(100),
        company_name varchar(100),
        country varchar(100)
    )`, (err, data) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(201).send(data)
        }
    })

}
)

app.post('/post/user', async (req, res) => {

    try {
        const { project_no, project_name, company_name, country } = req.body;
        // console.log(project_no,project_name,company_name,country)

        connection.query(`insert into users(project_no,project_name,company_name,country) values ('${project_no}','${project_name}','${company_name}','${country}')`, (err, data) => {
            if (err) {
                res.status(400).send()
            } else {
                res.status(201).send(data)
            }
        })
    } catch (e) {
        res.status(400).send()
    }
})



app.post('/get/user/find', async (req, res) => {

    try {
        const { project_no, project_name, company_name, country } = req.body;
        // console.log(project_no, project_name, company_name, country)

        // let list=await Data.find({$or:[{project_no},{project_name},{company_name},{country}]})

        connection.query(`SELECT * FROM users WHERE project_no LIKE '${project_no}' or project_name Like '${project_name}' or company_name Like '${company_name}' or country Like '${country}'`, (err,data) => {
          if(err){
            res.status(400).send(err)
          }else{
            res.status(200).send(data)
          }
        })
        
    } catch (e) {
        res.status(400).send()
    }
})
















app.listen(PORT, () => {
    console.log(`we are listening..`)
})