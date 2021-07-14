import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box/';
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSlide(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>

      </p>

      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: '219387',
    title: 'eu odeio segunda-feira',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  const usuarioAletorio = 'nicolasestanislau';
  // const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSlide githubUser={usuarioAletorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet />

          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleNewCommunity(e) {
              const dadosDoForm = new FormData(e.target);
              console.log('Campo: ', dadosDoForm.get('title'));
              console.log('Campo: ', dadosDoForm.get('image'));
              const comunidade = {
                id: new Date().toISOString,
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              }
              e.preventDefault();
              console.log(e);
              const comunidadesAtualizadas = [...comunidades, comunidade]
              setComunidades(comunidadesAtualizadas);
              console.log(comunidades);
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text" />

              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Qual vai ser o nome da sua comunidade?" />

              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>

        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper >
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`} >
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>

                  </li>

                )
              })}

            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} >
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>

                  </li>

                )
              })}

            </ul>
          </ProfileRelationsBoxWrapper>

        </div>
      </MainGrid>
    </>
  )
}
