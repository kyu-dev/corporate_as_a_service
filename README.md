# 🏢 CASS - Corporate As A Service

> _"L'objectif est d'optimiser la scalabilité des flux opérationnels transversaux dans une logique holistique."_

Une API REST satirique extensible qui génère du contenu corporate à la demande. Parfait pour vos présentations PowerPoint, vos meetings de 2h qui auraient pu être un email, ou simplement pour impressionner vos collègues avec des phrases sophistiquées.

## 🚀 Fonctionnalités

- **🎯 Générateur de Contenu**: Collection de phrases et expressions thématiques
- **⚡ API Ultra-rapide**: Propulsée par Hono.js et Cloudflare Workers
- **🎲 Aléatoire**: Chaque requête retourne un contenu différent
- **📚 Collections complètes**: Accès à toutes les bases de données
- **🔧 Extensible**: Architecture modulaire pour ajouter facilement de nouveaux thèmes

## 🌐 API Base URL

```
https://api.corporate-as-a-service.workers.dev
```

## 📋 Endpoints Disponibles

> Chaque thème suit le même pattern : `/{theme}` pour un élément aléatoire et `/{theme}/all` pour la collection complète

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

_D'autres thèmes peuvent être ajoutés facilement en suivant la même structure..._

## 🔄 Format de Réponse

Toutes les routes retournent le même format JSON standardisé :

```json
{
  "message": "Contenu généré selon le thème demandé"
}
```

**Exemples :**

- Corporate: _"Nous devons catalyser les synergies intersectorielles..."_
- Layoff: _"Nous entamons une transition stratégique dans laquelle..."_

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
│   ├── index.ts          # Point d'entrée et configuration des routes
│   └── routes/           # Modules de routes par thème
│       └── *.ts          # Chaque fichier gère un thème spécifique
├── public/               # Base de données JSON
│   └── *.json           # Collections de phrases par thème
├── package.json          # Configuration du projet
├── wrangler.jsonc        # Configuration Cloudflare Workers
└── tsconfig.json         # Configuration TypeScript
```

> **Architecture modulaire** : Chaque nouveau thème nécessite seulement un fichier de route et un fichier JSON correspondant.

## 🎭 Cas d'Usage

- **🎨 Générateur de Contenu** : Alimentez vos applications avec du contenu thématique
- **📊 Présentations & Meetings** : Ajoutez une touche d'authenticité corporate
- **🎓 Formation & Sensibilisation** : Illustrez les travers de la communication d'entreprise
- **🤖 Bots & Applications** : Intégrez facilement dans vos projets créatifs
- **🧪 Tests & Développement** : Service de données mock pour vos tests d'API
- **🎪 Divertissement** : Créez des expériences amusantes et satiriques

## 🔧 Développement

### Ajouter un Nouveau Thème

1. **Créer le fichier JSON** dans `public/` :

   ```json
   {
     "phrases": ["Votre première phrase...", "Votre deuxième phrase..."]
   }
   ```

2. **Créer la route** dans `src/routes/` :

   ```typescript
   import { Hono } from "hono";
   import themeData from "../../public/votre-theme.json";

   export const votreTheme = new Hono();

   votreTheme.get("/", (c) => {
     const result =
       themeData.phrases[Math.floor(Math.random() * themeData.phrases.length)];
     return c.json({ message: result });
   });

   votreTheme.get("/all", (c) => {
     return c.json({ message: themeData.phrases });
   });
   ```

3. **Importer dans `index.ts`** :

   ```typescript
   import { votreTheme } from "./routes/votre-theme";
   app.route("/votre-theme", votreTheme);
   ```

### Enrichir un Thème Existant

Modifiez simplement les fichiers JSON dans `public/` pour ajouter de nouvelles phrases à vos collections.

## 🤝 Contribution

Les contributions sont les bienvenues ! L'architecture modulaire facilite l'ajout de nouveaux thèmes et fonctionnalités.

### Comment Contribuer

1. **Fork** le projet
2. **Créer une branche** pour votre fonctionnalité (`git checkout -b feature/nouveau-theme`)
3. **Développer** votre ajout (voir section "Ajouter un Nouveau Thème")
4. **Commiter** vos changements (`git commit -m 'Ajouter le thème XYZ'`)
5. **Pusher** vers la branche (`git push origin feature/nouveau-theme`)
6. **Ouvrir une Pull Request**

## 🙏 Remerciements

- Inspiré par la richesse inépuisable du vocabulaire corporate mondial
- Merci à tous les consultants qui nous ont appris l'art de la communication sophistiquée
- Dédié à tous ceux qui ont déjà entendu parler de "synergie disruptive"

---

<div align="center">

**Créé avec ❤️ et beaucoup de second degré**

_"Architecture extensible pour un écosystème de génération de contenu scalable"_

</div>
