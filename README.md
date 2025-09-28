# Casa de Nazaré - Site Oficial

Site oficial da Casa de Nazaré, uma organização social brasileira fundada em 2000 que oferece serviços de psicoterapia, fonoaudiologia e atividades comunitárias como balé, jiu-jitsu e yoga.

## 🏠 Sobre o Projeto

Este site foi desenvolvido para apresentar os serviços e atividades da Casa de Nazaré, proporcionando uma experiência digital acolhedora e acessível para a comunidade. O projeto segue a identidade visual oficial da organização e oferece funcionalidades modernas como PWA (Progressive Web App).

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **PWA** - Progressive Web App com service worker
- **Responsive Design** - Layout adaptável para todos os dispositivos

## ✨ Funcionalidades

### 📱 Progressive Web App (PWA)
- Instalação como aplicativo nativo
- Funcionamento offline
- Cache inteligente de recursos
- Ícones personalizados para diferentes dispositivos

### 🎨 Design e Interface
- Identidade visual baseada na logomarca oficial
- Paleta de cores: Vermelho (#C23B2D), Bege/Rosa (#E9A89C), Verde (#2E6B4F), Preto (#1A1A1A)
- Design responsivo e acessível
- Animações suaves e interativas

### 📄 Páginas Principais
- **Home** - Apresentação da organização com hero section e estatísticas
- **Sobre Nós** - História, missão e galeria de fotos interativa
- **Serviços** - Detalhes dos atendimentos profissionais
- **Atividades** - Informações sobre atividades culturais e esportivas
- **Como Ajudar** - Formas de contribuir e ser voluntário
- **Contato** - Formulário com redirecionamento para WhatsApp

### 🖼️ Galeria Interativa
- Modal de fotos para cada categoria de serviço
- Navegação entre imagens com miniaturas
- Descrições detalhadas de cada foto
- Interface intuitiva e responsiva

### 📞 Integração WhatsApp
- Formulário de contato com redirecionamento automático
- Mensagem pré-formatada com dados do usuário
- Abertura direta no WhatsApp Web ou aplicativo

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
\`\`\`bash
git clone [URL_DO_REPOSITORIO]
cd casa-de-nazare-site
\`\`\`

2. **Instale as dependências**
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

3. **Execute o projeto em desenvolvimento**
\`\`\`bash
npm run dev
# ou
yarn dev
\`\`\`

4. **Acesse o projeto**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para produção

\`\`\`bash
npm run build
npm start
# ou
yarn build
yarn start
\`\`\`

## 📁 Estrutura do Projeto

\`\`\`
casa-de-nazare-site/
├── app/                    # App Router do Next.js
│   ├── sobre/             # Página Sobre Nós
│   ├── servicos/          # Página de Serviços
│   ├── atividades/        # Página de Atividades
│   ├── como-ajudar/       # Página Como Ajudar
│   ├── contato/           # Página de Contato
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── header.tsx         # Cabeçalho com navegação
│   ├── footer.tsx         # Rodapé
│   ├── hero.tsx           # Seção hero da homepage
│   ├── about.tsx          # Seção sobre na homepage
│   ├── services-preview.tsx # Preview dos serviços
│   ├── activities-preview.tsx # Preview das atividades
│   ├── call-to-action.tsx # Chamada para ação
│   └── photo-gallery-modal.tsx # Modal da galeria
├── public/                # Arquivos estáticos
│   ├── icons/             # Ícones da PWA
│   ├── images/            # Imagens do site
│   ├── manifest.json      # Manifest da PWA
│   └── sw.js              # Service Worker
└── README.md              # Este arquivo
\`\`\`

## 🎨 Paleta de Cores

A identidade visual segue as cores da logomarca oficial:

- **Vermelho Principal**: `#C23B2D` - Telhado e destaques
- **Bege/Rosa**: `#E9A89C` - Elementos suaves e backgrounds
- **Verde**: `#2E6B4F` - Detalhes e acentos
- **Preto**: `#1A1A1A` - Textos e silhuetas
- **Branco**: `#FFFFFF` - Fundos e contrastes

## 📱 Funcionalidades PWA

### Instalação
- O site pode ser instalado como aplicativo nativo
- Ícone personalizado na tela inicial
- Experiência similar a um app nativo

### Offline
- Funciona sem conexão com internet
- Cache inteligente de páginas e recursos
- Sincronização automática quando online

### Performance
- Carregamento rápido com cache estratégico
- Otimização automática de imagens
- Compressão de recursos

## 🌐 SEO e Acessibilidade

- Meta tags otimizadas para SEO
- Estrutura semântica HTML5
- Suporte a leitores de tela
- Contraste adequado de cores
- Navegação por teclado
- Textos alternativos em imagens

## 📞 Contato e Suporte

- **WhatsApp**: Integração direta via formulário
- **Localização**: Informações de endereço e mapa
- **Horários**: Funcionamento e atendimento

## 👥 Créditos

**Desenvolvido por**: [SevenDevX](https://sevendevx.com)

**Organização**: Casa de Nazaré - Fundada em 2000

**Design**: Baseado na identidade visual oficial da Casa de Nazaré

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para a Casa de Nazaré. Todos os direitos reservados.

---

**Casa de Nazaré** - Transformando vidas através do acolhimento e cuidado desde 2000.
