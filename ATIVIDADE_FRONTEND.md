# Atividade Frontend - ConvergencIA

## 📊 Projeto: ConvergencIA
**Data:** 02/03/2026

---

## 1️⃣ Evolução Tecnológica do Frontend

### 🎯 Fluxo MVP - Telas Essenciais

#### Ordem de Navegação:
```
1. Login (login.html) → Autenticação do usuário
2. Home (home.html) → Dashboard principal
3. PEI (pei.html) → Plano Educacional Individualizado
4. Estudos (estudos.html) → Conteúdos e materiais
5. Perfil (perfil.html) → Gerenciamento de perfil
6. Relatórios (relatorios.html) → Visualização de dados
```

#### Telas no MVP 1.0:
- [ ] **Tela de Login** - Prioridade: ALTA
- [ ] **Home/Dashboard** - Prioridade: ALTA
- [ ] **PEI** - Prioridade: ALTA
- [ ] **Estudos** - Prioridade: MÉDIA
- [ ] **Perfil** - Prioridade: MÉDIA
- [ ] **Relatórios** - Prioridade: BAIXA

### 🛠️ Stack e Padrão

#### Tecnologias:
| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| **Linguagem** | HTML5, CSS3, JavaScript (Vanilla) | ES6+ |
| **Estilização** | CSS modular (por página) | - |

#### Organização do Código:
```
FrontEnd-ConvergencIA/
├── index.html           # Página de entrada
├── pages/              # Todas as páginas da aplicação
├── assets/             # CSS modular por funcionalidade
├── js/                 # Scripts organizados por página
└── README.md           # Documentação

Padrão adotado:
- 1 arquivo CSS por página + componentes compartilhados (navbar, style.css)
- 1 arquivo JS por funcionalidade
- Separação clara entre estrutura (HTML), estilo (CSS) e lógica (JS)
```

### 📈 Evidência de Avanço Semanal

| Semana | Entrega | Evidência |
|--------|---------|-----------|
| Semana 1 | Estrutura inicial + Login | Screenshot + Código no GitHub |
| Semana 2 | Home + Navegação básica | Vídeo navegando + PR #X |
| Semana 3 | PEI funcional | Demo ao vivo + PR #Y |

**Método de comprovação:**
- [ ] Screenshot das telas funcionando
- [ ] Pull Request no GitHub
- [ ] Tela navegável (deploy ou local)
- [ ] Checklist de funcionalidades implementadas

---

## 2️⃣ Feedbacks de Melhoria

### 🎨 Top 3 Melhorias Esperadas

#### 1. **Melhoria UI/UX - Responsividade**
- **Descrição:** Adaptar todas as telas para mobile e tablet
- **Motivo:** Melhorar acessibilidade e experiência em dispositivos móveis
- **Prioridade:** ALTA
- **Impacto esperado:** Aumentar usabilidade em 60% dos dispositivos

#### 2. **Melhoria Técnica - Componentização**
- **Descrição:** Migrar para framework (React/Vue) ou criar sistema de componentes reutilizáveis
- **Motivo:** Reduzir código duplicado e facilitar manutenção
- **Prioridade:** MÉDIA
- **Impacto esperado:** Reduzir 40% do código HTML duplicado

#### 3. **Melhoria UI/UX - Feedback Visual**
- **Descrição:** Adicionar loading states, toasts de confirmação e animações
- **Motivo:** Melhorar feedback ao usuário durante ações
- **Prioridade:** MÉDIA
- **Impacto esperado:** Melhorar satisfação do usuário

### 🔍 Processo de Revisão

| Tipo | Responsável | Quando | Ferramenta |
|------|-------------|--------|------------|
| **Code Review** | [Nome do revisor] | A cada Pull Request | GitHub PR Review |
| **UX Review** | [Nome do responsável] | Semanal (toda sexta) | Figma + Reunião |
| **Teste funcional** | [Nome do QA] | Antes de merge | Checklist manual |

**Checklist de revisão:**
- [ ] Código segue padrão estabelecido
- [ ] CSS está modular e organizado
- [ ] JavaScript não possui código duplicado
- [ ] Tela é responsiva
- [ ] Funcionalidade foi testada

---

## 3️⃣ Planejado x Realizado

### 📅 Última Semana (26/02 - 02/03)

#### ✅ Planejado (5 itens):
1. [ ] **Criar estrutura base do projeto** - Responsável: [Nome]
2. [ ] **Implementar tela de login** - Responsável: [Nome]
3. [ ] **Desenvolver navbar de navegação** - Responsável: [Nome]
4. [ ] **Integrar login com backend** - Responsável: [Nome]
5. [ ] **Criar página Home** - Responsável: [Nome]

#### 🎯 Realizado (itens + evidências):
1. ✅ **Estrutura base criada** 
   - Evidência: [Commit #abc123] - Organização de pastas e arquivos
2. ✅ **Tela de login implementada**
   - Evidência: [Screenshot](link) + [login.html](pages/login.html) criado
3. ✅ **Navbar funcional**
   - Evidência: [navbar.css](assets/navbar.css) + navegação entre páginas
4. ⚠️ **Integração parcial com backend**
   - Evidência: [login.js](js/login.js) - faltando validação de erros
5. ✅ **Página Home criada**
   - Evidência: [home.html](pages/home.html) + [home.css](assets/home.css)

**Taxa de conclusão:** 4/5 (80%)

#### 🚧 Bloqueios e Aprendizados:

| Bloqueio | Impacto | O que faremos diferente |
|----------|---------|-------------------------|
| **Backend não estava pronto** | Médio - Atrasou integração do login | Começar com mock/fake API para não depender do backend |
| **Dificuldade com CSS Grid** | Baixo - Levou mais tempo que esperado | Estudar Grid/Flexbox antes + usar framework CSS (Bootstrap/Tailwind) |

---

## 4️⃣ Priorização - Próximas Tarefas

### 🎯 Top 5 Próximas Tarefas

| # | Tarefa | Responsável | Estimativa | Critério |
|---|--------|-------------|------------|----------|
| 1 | **Finalizar integração Login + Backend** | [Danilo] | P (2h) | MVP + Bloqueio anterior |
| 2 | **Implementar tela PEI completa** | [Miguel; Danilo] | G (8h) | MVP + Alto valor |
| 3 | **Criar sistema de autenticação (localStorage/session)** | [Nome] | M (4h) | MVP + Dependência |
| 4 | **Desenvolver tela de Estudos** | [Miguel; Danilo] | M (5h) | MVP |
| 5 | **Adicionar validação de formulários** | [Nome] | P (3h) | Risco + UX |

**Legenda:** P (Pequeno) = 1-3h | M (Médio) = 4-6h | G (Grande) = 7-10h

### 📋 Critérios de Priorização:

1. **MVP Primeiro** ⭐⭐⭐
   - Telas essenciais para o funcionamento básico
   - Login, Home, PEI são prioridade máxima

2. **Dependências** ⭐⭐
   - Tarefas que bloqueiam outras (ex: autenticação bloqueia páginas protegidas)

3. **Risco Técnico** ⭐⭐
   - Itens com maior incerteza técnica vão primeiro (para aprender cedo)

4. **Valor de Negócio** ⭐
   - Funcionalidades que trazem mais valor ao usuário final

---

## 📌 Quadro Resumo - Vision Board

### 🎯 Objetivo do Sprint Atual
> Entregar MVP funcional com Login, Home e PEI navegáveis e integrados ao backend

### 🏆 Meta da Semana
- [ ] 100% das telas MVP desenvolvidas
- [ ] 80% de integração com backend funcional
- [ ] 0 bugs críticos

### 📊 Métricas de Sucesso
- **Velocity:** 5 tarefas/semana
- **Qualidade:** 0 bugs críticos em produção
- **Coverage:** Todas as telas testadas manualmente

---

## 📝 Notas Adicionais

### Decisões Técnicas Importantes:
- Optamos por Vanilla JS no início para entender fundamentos
- CSS modular para facilitar manutenção
- Backend em Python (FastAPI) para integração

### Próximos Passos Estratégicos:
1. Avaliar migração para framework frontend (React/Vue) na Sprint 3
2. Implementar testes automatizados
3. Setup de CI/CD

---

**Última atualização:** 02/03/2026  
**Próxima revisão:** 09/03/2026
