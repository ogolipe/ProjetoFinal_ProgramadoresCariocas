-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28-Fev-2023 às 03:17
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `riole`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`id`, `nome`) VALUES
(1, 'Música'),
(2, 'Turismo'),
(3, 'Comida'),
(4, 'Geek');

-- --------------------------------------------------------

--
-- Estrutura da tabela `eventos`
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `banner` varchar(255) NOT NULL,
  `valor_min` int(11) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `nome_categoria` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `eventos`
--

INSERT INTO `eventos` (`id`, `nome`, `banner`, `valor_min`, `descricao`, `nome_categoria`) VALUES
(20, 'Aconchego Carioca', 'https://lh3.googleusercontent.com/p/AF1QipMcQCqF8HR8yjiLG4ptofO4-qVEUdwoANXINJGX=s1360-w1360-h1020', 0, 'Localizado na divisa entre Leme e Copacabana, com ótimas refeições. Rua barão de Iguatemi 245 praça da bandeira Rio de Janeiro-RJ CEP 20270-060.', 'comida'),
(21, 'The Maze', 'https://i.pinimg.com/736x/85/d1/17/85d117337120c46d67ab1429d5ff62c4.jpg', 10, 'O The Maze Rio é um espaço único localizado no Catete, Rio de Janeiro. o The Maze é um restaurante, local de show de jazz, centro de cultura e arte, e hotel.', 'turismo'),
(22, 'Bauru gourmet', 'https://lh3.googleusercontent.com/p/AF1QipP2F_qYcdim2JMlBUweKm6RwizJgqnaP_OcJmE7=s1360-w1360-h1020', 50, 'Restaurante com diferentes tipos de refeições e ótimo atendimento.', 'comida'),
(23, 'Bar do Momo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxdEH3kBrxaTsDmXqk_5HVnd31F7f3sgRSPBkYwwgke_3IT3nLtJncC1oodcsEz5Pbu2g&usqp=CAU', 0, 'Famoso bar tijucano, serve lanches e aperitivos brasileiros para acompanhar cervejas geladas. R. Gen. Espírito Santo Cardoso, 50A – Loja A – Tijuca Segunda a sábado, das 7h às 23h', 'comida'),
(25, 'RIO2C', 'https://s2.glbimg.com/cUTCTc8PlgexZB3awkTGsPTIHZI=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/P/G/SBpZHyRK2guoMJbzjpwQ/41175042202-7b8e333fab-k.jpg', 400, 'Festivalia – de 15 a 16 de abril de 2023    Destinado a estudantes, universitários e jovens profissionais ávidos por inspiração, informação e networking, a programação inclui shows de música, experiências de games, realidade virtual, palestras, bate-papos', 'geek'),
(26, 'Geek & Game Rio Festival', 'https://s2.glbimg.com/-K_3s66M9Y3TugHppy_S49myLBc=/0x0:787x467/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/A/l/0AsxRXR3WrUu5BPgtdKg/geek.jpg', 100, 'Evento acontece de 20 a 22 de julho, com espaços dedicados à cultura pop em geral, incluindo games, atores, influenciadores, cosplayers, escritores de literatura fantástica e quadrinistas, nacionais e internacionais.', 'geek'),
(27, 'Campus Party', 'https://static.mundoeducacao.uol.com.br/mundoeducacao/2019/07/campus-party.jpg', 350, 'A Campus Party é o maior festival de tecnologia, empreendedorismo, ciência e disruptividade do mundo! Nosso objetivo é criar cada vez mais um ambiente imersivo e disruptivo para debater sobre tecnologia, criatividade, inovação e educação.', 'geek'),
(32, 'Ilha fiscal', 'https://www.transportal.com.br/noticias/wp-content/uploads/2019/10/Castelinho.jpg', 36, 'A Ilha Fiscal é um dos vários pontos turísticos da cidade do Rio de Janeiro, atraindo milhares de pessoas anualmente. De responsabilidade da Marinha, a Ilha compõe o Complexo Cultural do Serviço de Documentação da Marinha (DPHDM). A visitação pode ser fei', 'turismo'),
(33, 'Jardim Botânico', 'https://alemdacurva.com/wp-content/uploads/2020/05/Off-The-Grid-Collage-Desktop-Wallpaper-7.jpg', 20, 'Fundado em 1808 por D. João, então príncipe regente de Portugal, o Jardim Botânico do Rio de Janeiro é famoso pela exuberância e importância de suas coleções de plantas, bem como pela beleza de suas paisagens. Sua história bicentenária se expressa em seus', 'turismo'),
(36, '2 Edição Confraria do Samba - Ilha de Paquetá', 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F439016389%2F1356524915743%2F1%2Foriginal.20230204-002104?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=3%2C0%2C1594%2C797&s=da6dc5374a452a3cb7c5d03366ea0f62', 30, 'O evento que reúne muita gente bonita e o melhor do samba. Atrações: Swing e Simpatia, Grupo Arruda, Marcos Santos e Bateria da Portela.Paquetá Iate Clube Rua das Gaivotas Paquetá, RJ 20396-060, sáb, 25 de março de 2023, 14:30 – 23:00 Horário Padrão de Br', 'musica'),
(52, 'vista chinesa', 'http://trilhatranscarioca.com.br/wp-content/uploads/2016/09/Vista-Chinesa-por-Rafael-Duarte1_9-1.jpg', 0, 'Vista Chinesa! Essa atração está localizada próxima ao Parque Nacional da Tijuca e por isso revela paisagens lindas. Além disso, é um destino ideal para quem ama natureza e curte boas aventuras', 'turismo'),
(53, 'pico da tijuca', 'https://freewalkertours.com/wp-content/uploads/pico-foto-de-capa.jpg', 0, 'O pico da Tijuca está localizado na Floresta da Tijuca, que é parte do Parque Estadual da Tijuca. Este é o ponto mais alto do Parque, com 1.022 metros de altitude, e o segundo ponto mais alto da cidade do Rio de Janeiro, sendo o primeiro lugar o Pico da P', 'turismo');


--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria_id` (`nome_categoria`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
