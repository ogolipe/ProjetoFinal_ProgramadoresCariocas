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
(20, 'Restaurante Mocotó', 'https://media-cdn.tripadvisor.com/media/photo-s/0c/25/2b/95/photo3jpg.jpg', 10, 'Descrição do Evento A', 'comida'),
(21, 'Selaron', 'https://cdn.culturagenial.com/imagens/santa-teresa-cke.jpg', 85, 'Escada', 'turismo'),
(22, 'Restaurante Lilia', 'https://media-cdn.tripadvisor.com/media/photo-s/15/ec/60/81/screenshot-20190101-130602.jpg', 200, 'caro', 'comida'),
(23, 'Contemporaneo Lapa', 'https://media-cdn.tripadvisor.com/media/photo-s/19/f2/9b/97/painel-maravilhoso-da.jpg', 135, 'Descrição do Evento D', 'comida'),
(25, 'Rio2C', 'https://s2.glbimg.com/0KwlYBtOacaJTSCkacYdpO-evgY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/P/G/SBpZHyRK2guoMJbzjpwQ/41175042202-7b8e333fab-k.jpg', 49, 'Descrição do Evento F', 'geek'),
(26, 'Geek & Game Rio Festival', 'https://s2.glbimg.com/-K_3s66M9Y3TugHppy_S49myLBc=/0x0:787x467/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/A/l/0AsxRXR3WrUu5BPgtdKg/geek.jpg', 27, 'Descrição do Evento G', 'geek'),
(27, 'Campus Party', 'https://s2.glbimg.com/bsQlI4hwbODzKEbr6T2Kwcs31sk=/0x0:1900x1267/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/b/V/AkCITSToeetljl0WRvCg/90ef60ef-68a6-4f53-a4a1-761e82e0b29b-.jpg', 122, 'Descrição do Evento H', 'geek'),
(28, 'CCXP', 'https://classic.exame.com/wp-content/uploads/2019/12/ccxp.gif?w=1024', 230, 'Descrição do Evento I', 'geek'),
(29, 'Rio Info', 'https://s2.glbimg.com/Tjzv4lxvys3P3X8OEWOjEj3Gtw8=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/O/5/bpSq2ZSAGrJokgaTAR9g/rio-info.jpg', 63, 'Descrição do Evento J', 'geek'),
(30, 'Museu do Trem', 'https://riotur.rio/wp-content/uploads/2016/07/Baroneza-com-os-dois-carros-e-Busto-do-Bar%C3%A3o-de-Mau%C3%A1.jpg', 44, 'Descrição do Evento K', 'turismo'),
(31, 'Real Gabinete Português de Leitura', 'https://diariodorio.com/wp-content/uploads/2021/02/Real-Gabinete-Portugues-Rio_destaque.jpg', 95, 'Descrição do Evento L', 'turismo'),
(32, 'Ilha Fiscal', 'https://www.transportal.com.br/noticias/wp-content/uploads/2019/10/Castelinho.jpg', 29, 'Descrição do Evento M', 'turismo'),
(33, 'Jardim Botânico', 'https://s2.glbimg.com/X2VXxYJ8VgzHdwY5W8smdfisY4w=/620x455/e.glbimg.com/og/ed/f/original/2022/06/13/jardim-botanico-rio-casaejardim-2.jpg', 56, 'Descrição do Evento N', 'turismo'),
(34, 'Casa Daros', 'https://vejario.abril.com.br/wp-content/uploads/2016/11/3325_screen-shot-2015-05-12-at-5-05-33-pm.png?w=995&h=659&crop=1', 700, 'Descrição do Evento O', 'turismo'),
(35, 'RioHarpFestival', 'https://bafafa.com.br/images/artigos/rio_harp_festival_2022_28062022_054645.jpg', 56, 'Descrição do Evento P', 'musica'),
(36, 'Mimo Festival', 'https://i.ytimg.com/vi/ZlX4incSrhs/maxresdefault.jpg', 85, 'Descrição do Evento Q', 'musica'),
(37, 'Sarau do Escritório', 'https://peneira.org/wp-content/uploads/2016/02/Sarau-01-1.jpg', 0, 'Descrição do Evento R', 'musica'),
(38, 'Festival DuoJazz', 'https://www.pacodolavradio.com.br/wp-content/uploads/2018/11/29744714_1503492953095410_4104191573240913943_o-1200x675.png', 231, 'Descrição do Evento S', 'musica'),
(39, 'Cine Jazz', 'https://i0.wp.com/ondapocos.com.br/wp-content/uploads/2022/11/IMG-20221112-WA0002.jpg?resize=1140%2C570&ssl=1', 0, 'Descrição do Evento T', 'musica'),
(40, 'Aprazível', 'https://vejario.abril.com.br/wp-content/uploads/2016/08/aprazivel.jpg', 58, 'Descrição do Evento B', 'comida'),
(45, 'Jantar na casa dos Sohma', 'https://nefariousreviews.files.wordpress.com/2020/05/fruits-basket-dinner.jpg', 122, 'Tem que ser amigo', 'comida'),
(49, 'vista chinesa', 'https://freewalkertours.com/wp-content/uploads/vista-chinesa-1100x733.jpg', 29, 'sddsd', 'musica'),
(50, 'Maria', 'https://freewalkertours.com/wp-content/uploads/vista-chinesa-1100x733.jpg', 100, 'vbcvb', 'comida');

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
