# Documentation - Page Web des Résultats de l'Enquête PSD

## Introduction

Cette documentation explique comment utiliser, maintenir et mettre à jour la page web présentant les résultats de l'enquête du Plan Stratégique de Développement (PSD) auprès des parents du LFJP.

## Structure des fichiers

```
enquete_psd_web/
├── index.html          # Page principale
├── css/
│   ├── normalize.css   # Normalisation des styles entre navigateurs
│   └── styles.css      # Styles personnalisés
├── js/
│   ├── main.js         # Script principal
│   └── charts.js       # Scripts pour les graphiques
└── images/             # Dossier contenant les images
```

## Technologies utilisées

- **HTML5** : Structure de la page
- **CSS3** : Mise en forme et style
- **JavaScript** : Interactivité et graphiques
- **Chart.js** : Bibliothèque pour la création des graphiques

## Comment mettre à jour le contenu

### Modifier le texte

Pour modifier le texte de la page, ouvrez le fichier `index.html` dans un éditeur de texte et localisez la section que vous souhaitez modifier. Le contenu est organisé en sections avec des identifiants clairs :

```html
<section id="introduction" class="section">
    <!-- Contenu de la section introduction -->
</section>
```

### Mettre à jour les graphiques

Les graphiques sont générés à l'aide de la bibliothèque Chart.js. Pour modifier les données d'un graphique :

1. Ouvrez le fichier `js/charts.js`
2. Localisez le graphique que vous souhaitez modifier (ils sont identifiés par des commentaires)
3. Modifiez les données dans le tableau `data` correspondant

Exemple :
```javascript
// Graphique 1: Indicateur de recommandation (Pie Chart)
const recommendationChart = document.getElementById('recommendationChart');
if (recommendationChart) {
    new Chart(recommendationChart, {
        type: 'pie',
        data: {
            labels: ['Oui', 'Non'],
            datasets: [{
                data: [93.3, 6.7], // Modifiez ces valeurs pour mettre à jour le graphique
                backgroundColor: [colors.primary, colors.secondary],
                borderColor: colors.tertiary,
                borderWidth: 2
            }]
        },
        // ...
    });
}
```

### Ajouter une nouvelle section

Pour ajouter une nouvelle section :

1. Ajoutez un lien dans la navigation :
```html
<li><a href="#nouvelle-section">Nouvelle Section</a></li>
```

2. Créez la section dans le corps de la page :
```html
<section id="nouvelle-section" class="section">
    <div class="container">
        <h2 class="section-title">Titre de la nouvelle section</h2>
        <div class="section-content">
            <!-- Contenu de la nouvelle section -->
        </div>
    </div>
</section>
```

3. Si nécessaire, ajoutez des styles spécifiques dans le fichier `css/styles.css`

## Personnalisation visuelle

### Modifier les couleurs

Les couleurs principales sont définies comme variables CSS dans le fichier `css/styles.css` :

```css
:root {
    --color-primary: #0055A4;    /* Bleu */
    --color-secondary: #EF4135;  /* Rouge */
    --color-tertiary: #FFFFFF;   /* Blanc */
    /* ... autres couleurs ... */
}
```

Pour changer une couleur, modifiez simplement la valeur hexadécimale correspondante.

### Modifier les polices

Les polices sont également définies comme variables CSS :

```css
:root {
    --font-primary: 'Open Sans', sans-serif;
    --font-heading: 'Montserrat', sans-serif;
    /* ... */
}
```

Pour changer une police, modifiez le nom de la police et assurez-vous d'inclure le lien vers la nouvelle police dans l'en-tête du fichier `index.html`.

## Optimisation pour les mobiles

La page est déjà responsive et s'adapte aux différentes tailles d'écran. Les règles CSS pour les appareils mobiles sont définies à la fin du fichier `css/styles.css` à l'aide de media queries :

```css
@media (max-width: 768px) {
    /* Styles pour les écrans de petite taille */
}
```

## Hébergement et déploiement

Pour mettre en ligne la page web :

1. Transférez tous les fichiers du dossier `enquete_psd_web` sur votre serveur web
2. Assurez-vous que la structure des dossiers est préservée
3. Vérifiez que le serveur est configuré pour servir les fichiers HTML, CSS et JavaScript correctement

## Maintenance

### Vérification des liens

Vérifiez régulièrement que tous les liens internes fonctionnent correctement.

### Mise à jour des bibliothèques

La page utilise Chart.js pour les graphiques. Si vous souhaitez mettre à jour cette bibliothèque :

1. Téléchargez la dernière version sur [le site officiel de Chart.js](https://www.chartjs.org/)
2. Remplacez le lien CDN dans l'en-tête du fichier `index.html`
3. Testez que tous les graphiques fonctionnent correctement après la mise à jour

## Tests

Une suite de tests automatisés permet de vérifier certaines interactions JavaScript.
Les tests utilisent **Jest** avec l'environnement **jsdom**.

### Exécuter les tests

1. Installez les dépendances Node.js (Jest et jsdom) :

   ```bash
   npm install
   ```

2. Lancez les tests avec :

   ```bash
   npm test
   ```


## Support

Pour toute question ou assistance technique concernant cette page web, veuillez contacter :
- Email : contact@ape-lfjp.org

---

© 2025 APE-LFJP - Tous droits réservés

