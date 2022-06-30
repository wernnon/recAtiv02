//App.jsx
import './App.css'


function App(){
  const palavras_chave = ["linux", 
  "docker", "server", "rails", "douane", "my-developments","command-line", 
  "ruby", "c-2", "linux-on-mac", "maintenance", "security", "gnome", 
  "kubernetes","mes-developpements", "ubuntu", "python", "vcs", "capybara", 
  "contribution", "git", "apt","bazaar", "chef", "cucumber", "debian", "game", 
  "howto", "packaging", "testing", "boost", "debug","devise", "elixir", "gtk", 
  "homebrew", "information", "ssh", "tuxtremsplit", "xpath"]
  const lista = palavras_chave.map(
    (c)=> 
    <p className='box'>{c}</p>
  )
return(
  <div className='content'>
     
      {lista}
  
  </div>

)
}
export default App