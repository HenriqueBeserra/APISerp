const { createClient} = require('@supabase/supabase-js')

const supabaseURL = "https://rqhshpatescsyngddjzv.supabase.co"
const supabaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxaHNocGF0ZXNjc3luZ2Rkanp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ4MzQ1NzUsImV4cCI6MTk3MDQxMDU3NX0.d5f_23xaBtdn0ul9uuLbzJhGBdBrAh1gE6AEqdJOp3M'

// Fazendo a conexão com o banco de dados
const supabase =  createClient(
  supabaseURL,
  supabaseKEY
  )


const bancoDeDados = {
    getRevistas: async () => {

        let { data, error } = await supabase 
            .from('RevistasSerp')
            .select('titulo, tipo, descricao')

            if(error) {
                console.error(error);
                return;
            }
            let info = {}
            info.revistas = data
         
        return info;
    },

    getImgURL: async () => {
        
        let { data, error } = await supabase
            .from('RevistasSerp')
            .select('url_image' )

            if(error) {
                console.error(error)
                return
            }
            let info= {}
            info.img = data
             
        return info;
    },

    getEscritor: async () => {

        var{ data, error } = await supabase
            .from('RevistasSerp')
            .select('titulo, escritor')
        
            if(error) {
                console.error(error)
                return
            }

            let info = {}
            info.revistas = data
                 
        return info;
    }

}
    

bancoDeDados.getImgURL()
module.exports = bancoDeDados;