<template>
  <section class="topo-pagina fade-in-on-scroll" data-animate-on-scroll>
    <h3>Portfólio</h3>
    <p>Transformando ideias em experiências. Explore meu portfólio e conheça um pouco mais do meu trabalho.</p>
  </section>
  <div class="topo-pagina">
    <svg width="100%" height="100%" viewBox="0 80 1440 230" xmlns="http://www.w3.org/2000/svg" class="svg-anim">
      <defs>
        <pattern id="imagePattern" patternUnits="userSpaceOnUse" width="1440" height="320">
          <image href="/images/background_folhas.jpg" x="0" y="0" width="1440" height="320"
            preserveAspectRatio="xMidYMid slice" />
        </pattern>
      </defs>


      <path d="M 0,400 L 0,150 C 258.5,140.5 517,131 757,131 C 997,131 1218.5,140.5 1440,150 L 1440,400 L 0,400 Z"
        fill="#fdf7eb" fill-opacity="1" class="animated-path" />
    </svg>
  </div>
  <div class="container-sobre">
    <div class="topo-pagina">
    </div>

    <!-- SOBRE MIM -->
    <section class="sobre-mim fade-in-on-scroll" data-animate-on-scroll>
      <div class="foto-perfil">
        <img src="/images/profile.png" alt="Foto de perfil" />
      </div>
      <div class="texto-sobre">
        <h2>Sobre Mim</h2>
        <p>
          Sou Igor Felix da Silva, estudante de Engenharia Mecânica com formações em Design Gráfico e Análise e
          Desenvolvimento de Sistemas. Atuei por dois anos na EMBRAER como Estágiario, onde me destaquei na área de
          Melhoria Contínua e
          Evolução de Processos, desenvolvendo soluções aplicadas tanto no Brasil quanto em unidades internacionais,
          como Portugal e França.
          <br><br>
          Acredito na força da multidisciplinaridade e da inovação para transformar ideias em soluções reais que gerem
          impacto positivo. Estou sempre em busca de novos desafios que me permitam evoluir e contribuir para um futuro
          mais eficiente, criativo e tecnológico.
        </p>
      </div>
    </section>

    <!-- CURVA MEIO PRIMEIRA -->
    <div class="curva-fim">
      <svg width="100%" height="100%" viewBox="0 85 1440 190" xmlns="http://www.w3.org/2000/svg" class="svg-anim">
        <path
          d="M 0,500 L 0,187 C 142.66666666666669,241.39999999999998 285.33333333333337,295.79999999999995 466,266 C 646.6666666666666,236.20000000000002 865.3333333333333,122.2 1034,95 C 1202.6666666666667,67.8 1321.3333333333335,127.4 1440,187 L 1440,500 L 0,500 Z"
          fill="#1c1c1c" class="animated-path" />
      </svg>
    </div>

    <!-- TRABALHOS -->
    <section class="trabalhos">
      <h2 class="fade-in-on-scroll" data-animate-on-scroll>Trabalhos Recentes</h2>
      <p>{{ trabalhos[slideAtivo]?.tipo || 'Sem descrição disponível.' }}</p>
<swiper
      :slides-per-view="1"
      :space-between="10"
      :navigation="{
        nextEl: '.custom-nav.next',
        prevEl: '.custom-nav.prev'
      }"
      :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
      :modules="[Autoplay, Navigation]"
      class="meu-swiper"
      center-insufficient-slides="true"
      @slideChange="onSlideChange"
      @swiper="onSwiperInit"
    >
        <swiper-slide v-for="(trabalho, index) in trabalhos" :key="index">
          <div class="card-trabalho fade-in-on-scroll" data-animate-on-scroll>
            <img :src="trabalho.imagem" alt="Imagem do trabalho" />
          </div>
        </swiper-slide>

        <!-- Navegação personalizada -->
        <!-- Botões de navegação personalizados -->
        <div class="custom-nav prev fade-in-on-scroll" data-animate-on-scroll>
          <img src="/images/button-left.svg" alt="Anterior" />
        </div>
        <div class="custom-nav next fade-in-on-scroll" data-animate-on-scroll>
          <img src="/images/button-left.svg" alt="Próximo" class="seta-direita" />
        </div>



      </swiper>


      <!-- Descrição de cada trabalho -->
      <section class="desc-trabalho fade-in-on-scroll" data-animate-on-scroll>
        <h2>{{ trabalhos[slideAtivo]?.titulo || 'Sem título' }}</h2>
        <p v-html="formatarDescricao(trabalhos[slideAtivo]?.descricao || 'Sem descrição disponível.')"></p>
      </section>
    </section>
  </div>

  <section>
    <div class="curva-fim">
      <svg width="100%" height="100%" viewBox="0 85 1440 230" xmlns="http://www.w3.org/2000/svg" class="svg-anim">
        <defs>
          <pattern id="imagePattern" patternUnits="userSpaceOnUse" width="1440" height="320">
            <image href="/images/background_folhas.jpg" x="0" y="0" width="1440" height="320"
              preserveAspectRatio="xMidYMid slice" />
          </pattern>
        </defs>


        <path d="M 0,400 L 0,150 C 258.5,140.5 517,131 757,131 C 997,131 1218.5,140.5 1440,150 L 1440,400 L 0,400 Z"
          fill="#1c1c1c" fill-opacity="1" class="animated-path" transform="rotate(-180 720 200)" />
      </svg>
    </div>
  </section>

 <section class="contato">
    <div class="contato-texto fade-in-on-scroll" data-animate-on-scroll>
      <h2>Entre em Contato</h2>
      <p>
        Estou sempre aberto a novas oportunidades, colaborações e projetos que tragam desafios interessantes.
        Se quiser trocar ideias ou entender como posso contribuir para o seu projeto, envie uma mensagem.
        Responderei com atenção, rapidez e muito interesse em ajudar.
        <br><br>
        Fique à vontade para conectar comigo no LinkedIn ou GitHub também!
      </p>
      <div class="contato-icones fade-in-on-scroll" data-animate-on-scroll>
        <a href="https://www.linkedin.com/in/igufelix/" target="_blank" rel="noopener">
          <img src="/images/icon_linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/IGU-Felix" target="_blank" rel="noopener">
          <img src="/images/icon_github.png" alt="GitHub" />
        </a>
      </div>
    </div>

    <!-- <form class="contato-formulario fade-in-on-scroll" data-animate-on-scroll @submit.prevent="enviarFormulario">
      <div class="input-linha fade-in-on-scroll" data-animate-on-scroll>
        <input type="text" placeholder="Nome" v-model="form.nome" required />
        <input type="text" placeholder="Sobrenome" v-model="form.sobrenome" />
      </div>
      <input type="email" placeholder="Email" v-model="form.email" required />
      <textarea placeholder="Digite sua mensagem..." v-model="form.mensagem" required></textarea>

      <button type="submit" class="botao-enviar">Enviar Mensagem</button>

      <p v-if="mensagemFeedback" :class="{ 'mensagem-sucesso': formEnviado, 'mensagem-erro': erroEnvio }">
        {{ mensagemFeedback }}
      </p>
    </form> -->
  </section>
</template>

<!--Script Carrossel-->
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import { Navigation, Autoplay } from 'swiper/modules' // Importe Autoplay aqui

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  // Adicione a propriedade 'modules' para que o template possa acessá-los
  setup() {
    return {
      Autoplay, // Exponha Autoplay para o template
      Navigation, // Exponha Navigation para o template
    }
  },
  data() {
    return {
      swiperInstance: null,
      slideAtivo: 0,
      trabalhos: [
        {
          titulo: "Aplicativo de Inspeções Periódicas",
          imagem: "/images/TPM.png",
          descricao: "Ao longo de 2 anos e meio, atuei na Embraer, onde tive a oportunidade de desenvolver habilidades técnicas e comportamentais que considero fundamentais para minha trajetória profissional. Durante minha experiência na área de Processos e Eficiência no MRO Brasil, participei ativamente da estruturação do processo de TPM, desenvolvendo um aplicativo e automatizando etapas que contribuíram significativamente para a melhoria contínua da área. Além disso, colaborei na divulgação e apresentação do projeto, que foi implementado no Brasil sendo referência no exterior, como em nosso site em OGMA (Portugal) e em Le Bourget (França), onde realizei apresentações em inglês ao lado de meus colegas.",
          tipo: "Programação, UX & UI"
        },
        {
          titulo: "Brew & Bytes",
          imagem: "/images/brewbytes.png",
          descricao: 'Esse projeto foi desenvolvido em colaboração com <a href="https://www.linkedin.com/in/caio-emanuel-mendes-432244263/" target="_blank">Caio Emmanuel</a>, <a href="https://www.linkedin.com/in/rodrigo-graciotto-a99798264/" target="_blank">Rodrigo Graciotto</a>, <a href="https://www.linkedin.com/in/cainan-tb-santos/" target="_blank">Cainan Thomas</a> e <a href="https://www.linkedin.com/in/mssnandes/" target="_blank">Moisés Fernandes</a>, com o objetivo de criar o conceito da Brew & Bytes — uma cafeteria moderna que combina um ambiente acolhedor com serviços de assistência técnica para computadores. A proposta é que os clientes possam levar seus dispositivos para manutenção e, enquanto aguardam, desfrutem de cafés especiais e utilizem as estações de trabalho da própria cafeteria. \n Fiquei responsável pela maior parte do design visual do projeto, desenvolvendo a identidade da marca, o conceito de ambientação e o layout das telas. A ideia central foi criar uma experiência que unisse tecnologia, praticidade e conforto em um único espaço.',
          tipo: "Design"
        },
        {
          titulo: "Animz",
          imagem: "/images/anims.png",
          descricao: 'Um projeto que fiz, juntamente com o <a href="https://www.linkedin.com/in/caio-emanuel-mendes-432244263/" target="_blank">Caio Emmanuel</a> e <a href="https://www.linkedin.com/in/rodrigo-graciotto-a99798264/" target="_blank">Rodrigo Graciotto</a>.\n Utilizamos um template em Bootstrap para o front-end e fizemos a API utilizando React, Node e Prisma. Para o banco de dados, usamos o PhpMyAdmin com MySQL. Também buscamos todos os animes através de uma API pronta chamada Jikan, que puxa dados do site MyAnimeList. A API que criamos controla o cadastro e login dos usuários, além dos comentários. A ideia do projeto foi criar um site onde a busca por animes fosse simples e os próprios consumidores pudessem fazer reviews. \n <a href="https://www.linkedin.com/feed/update/urn:li:activity:7249879720832421888/" target="_blank">Postagem do Projeto no LinkedIn</a> ',
          tipo: "Design & Programação"
        },
      ],
       form: {
        nome: '',
        sobrenome: '',
        email: '',
        mensagem: ''
      },
      formEnviado: false,   // Indica se o formulário foi enviado com sucesso
      erroEnvio: false,     // Indica se houve um erro no envio
      mensagemFeedback: ''  // Mensagem para o usuário (sucesso/erro)
    }
  },
  methods: {
    onSwiperInit(swiper) {
      this.swiperInstance = swiper
      this.slideAtivo = swiper.realIndex
    },
    onSlideChange() {
      if (this.swiperInstance) {
        this.slideAtivo = this.swiperInstance.realIndex
      }
    },
    formatarDescricao(texto) {
      if (!texto) return ''
      return texto.replace(/\n/g, '<br><br>')
    },
    async enviarFormulario() {
      // 1. Validação simples no front-end
      if (!this.form.nome || !this.form.email || !this.form.mensagem) {
        this.erroEnvio = true;
        this.mensagemFeedback = 'Por favor, preencha todos os campos obrigatórios (Nome, Email, Mensagem).';
        // Resetar sucesso caso tenha sido enviado antes
        this.formEnviado = false;
        return; // Interrompe a função se a validação falhar
      }

      // Resetar mensagens de feedback anteriores ao tentar enviar novamente
      this.formEnviado = false;
      this.erroEnvio = false;
      this.mensagemFeedback = 'Enviando...'; // Feedback imediato ao usuário

      // Dados a serem enviados para o back-end
      const dadosFormulario = {
        nome: this.form.nome,
        sobrenome: this.form.sobrenome,
        email: this.form.email,
        mensagem: this.form.mensagem
      };

      try {
        // Faz a requisição POST para o seu back-end
        // IMPORTANTE: Certifique-se que o seu back-end está rodando em http://localhost:3000
        const response = await fetch('http://localhost:3000/api/enviar-contato', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dadosFormulario),
        });

        if (response.ok) { // Verifica se a requisição foi bem-sucedida (status 2xx)
          this.formEnviado = true;
          this.mensagemFeedback = 'Mensagem enviada com sucesso! Em breve entrarei em contato.';
          // Limpa os campos do formulário após o envio
          this.form.nome = '';
          this.form.sobrenome = '';
          this.form.email = '';
          this.form.mensagem = '';
        } else {
          // Se a resposta não for OK, tenta ler a mensagem de erro do back-end
          const errorData = await response.json();
          throw new Error(errorData.message || `Erro no servidor (${response.status}).`);
        }

      } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        this.erroEnvio = true;
        this.mensagemFeedback = `${error.message}.`;
      }
    }
  },
  mounted() {
    const elementsToAnimate = document.querySelectorAll('[data-animate-on-scroll]')
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    }
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, options)
    elementsToAnimate.forEach(element => {
      observer.observe(element)
    })
  }
}
</script>