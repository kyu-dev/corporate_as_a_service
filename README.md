# 🏢 CASS - Corporate As A Service

> _"L'objectif est d'optimiser la scalabilité des flux opérationnels transversaux dans une logique holistique."_

Une API REST satirique qui génère du jargon corporate et des messages de licenciement à la demande. Parfait pour vos présentations PowerPoint, vos meetings de 2h qui auraient pu être un email, ou simplement pour impressionner vos collègues avec des phrases vides de sens.

## 🚀 Fonctionnalités

- **🎯 Jargon Corporate**: Génération de phrases corporate sophistiquées et vides de sens
- **⚡ API Ultra-rapide**: Propulsée par Hono.js et Cloudflare Workers
- **🎲 Aléatoire**: Chaque requête retourne une phrase différente
- **📚 Collection complète**: Accès à toute la base de données de phrases

## 🌐 Endpoints

### Corporate Speak

```
GET /              # Phrase corporate aléatoire
GET /all           # Toutes les phrases corporate
```

### Layoff Messages

```
GET /layoff        # Message de licenciement aléatoire
GET /layoff/all    # Tous les messages de licenciement
```

## 📋 Exemples de Réponses

### Corporate Speak

```json
{
  "message": "Nous devons catalyser les synergies intersectorielles afin de maximiser notre proposition de valeur à 360 degrés."
}
```

### Layoff Messages

```json
{
  "message": "Nous entamons une transition stratégique dans laquelle votre rôle n'est plus aligné avec notre vision à long terme."
}
```

## 🛠️ Technologies

- **[Hono.js](https://hono.dev/)** - Framework web ultra-rapide pour Edge Runtime
- **[Cloudflare Workers](https://workers.cloudflare.com/)** - Déploiement edge computing
- **[TypeScript](https://www.typescriptlang.org/)** - Pour un code type-safe
- **[pnpm](https://pnpm.io/)** - Gestionnaire de paquets performant

## 🚀 Installation et Développement

### Prérequis

- Node.js (version 18+)
- pnpm
- Wrangler CLI

### Installation

```bash
# Cloner le projet
git clone https://github.com/kyu-dev/corporate_as_a_service.git
cd corporate_as_a_service

# Installer les dépendances
pnpm install

# Lancer en mode développement
pnpm dev
```

### Déploiement

```bash
# Déployer sur Cloudflare Workers
pnpm deploy
```

## 📁 Structure du Projet

```
├── src/
│   ├── index.ts          # Point d'entrée principal
│   └── routes/
│       ├── corporate.ts  # Routes pour le jargon corporate
│       └── layoff.ts     # Routes pour les messages de licenciement
├── public/
│   ├── corporate.json    # Base de données des phrases corporate
│   └── layoff.json       # Base de données des messages de licenciement
├── package.json
├── wrangler.jsonc        # Configuration Cloudflare Workers
└── tsconfig.json
```

## 🎭 Cas d'Usage

- **Présentations d'entreprise** : Ajoutez une dose de sophistication vide à vos slides
- **Générateur de texte** : Pour vos applications de génération de contenu
- **Formation** : Sensibilisez vos équipes aux travers du langage corporate
- **Humour** : Créez des bots ou des applications amusantes
- **Tests d'API** : Utilisez comme service de test pour vos applications

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Forker le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commiter vos changements (`git commit -m 'Ajouter une nouvelle fonctionnalité'`)
4. Pusher vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

### Ajouter de nouvelles phrases

Pour enrichir la base de données, modifiez les fichiers JSON dans le dossier `public/` :

- `corporate.json` pour le jargon corporate
- `layoff.json` pour les messages de licenciement

<div align="center">

**Créé avec ❤️ et beaucoup de second degré**

</div>
