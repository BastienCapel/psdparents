// Script pour la création des graphiques avec Chart.js

document.addEventListener('DOMContentLoaded', function() {
    // Configuration globale de Chart.js
    Chart.defaults.font.family = "'Open Sans', sans-serif";
    Chart.defaults.color = '#333333';
    Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(0, 85, 164, 0.8)';
    Chart.defaults.plugins.legend.position = 'bottom';
    
    // Couleurs pour les graphiques
    const colors = {
        primary: '#0055A4',
        secondary: '#EF4135',
        tertiary: '#FFFFFF',
        positive: '#009B3A',
        neutral: '#FF9E1B',
        negative: '#FF6B6B',
        lightGray: '#F5F5F5',
        mediumGray: '#E0E0E0',
        darkGray: '#666666'
    };
    
    // Fonction pour obtenir des couleurs dégradées
    function getGradientColors(count, startColor, endColor) {
        const colors = [];
        for (let i = 0; i < count; i++) {
            const ratio = i / (count - 1);
            colors.push(interpolateColor(startColor, endColor, ratio));
        }
        return colors;
    }
    
    // Fonction pour interpoler entre deux couleurs
    function interpolateColor(color1, color2, ratio) {
        const r1 = parseInt(color1.substring(1, 3), 16);
        const g1 = parseInt(color1.substring(3, 5), 16);
        const b1 = parseInt(color1.substring(5, 7), 16);
        
        const r2 = parseInt(color2.substring(1, 3), 16);
        const g2 = parseInt(color2.substring(3, 5), 16);
        const b2 = parseInt(color2.substring(5, 7), 16);
        
        const r = Math.round(r1 + (r2 - r1) * ratio);
        const g = Math.round(g1 + (g2 - g1) * ratio);
        const b = Math.round(b1 + (b2 - b1) * ratio);
        
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
    
    // Graphique 1: Indicateur de recommandation (Pie Chart)
    const recommendationChart = document.getElementById('recommendationChart');
    if (recommendationChart) {
        new Chart(recommendationChart, {
            type: 'pie',
            data: {
                labels: ['Oui', 'Non'],
                datasets: [{
                    data: [93.3, 6.7],
                    backgroundColor: [colors.primary, colors.secondary],
                    borderColor: colors.tertiary,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Recommanderiez-vous le LFJP ?',
                        font: {
                            size: 16,
                            family: "'Montserrat', sans-serif",
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }
    
    // Graphique 2: Pourquoi les familles choisissent-elles le LFJP ? (Bar Chart)
    const choiceChart = document.getElementById('choiceChart');
    if (choiceChart) {
        new Chart(choiceChart, {
            type: 'bar',
            data: {
                labels: [
                    'Continuité du cursus en France',
                    'Partenariat AEFE',
                    'Langue & culture françaises',
                    'Excellence & qualité de l\'enseignement',
                    'Aide apportée à l\'enfant',
                    'Frais de scolarité'
                ],
                datasets: [{
                    label: 'Note moyenne sur 5',
                    data: [4.40, 4.07, 4.04, 3.71, 3.52, 2.67],
                    backgroundColor: getGradientColors(6, colors.positive, colors.negative),
                    borderColor: colors.tertiary,
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 5,
                        title: {
                            display: true,
                            text: 'Note moyenne sur 5'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Note: ${context.raw}/5`;
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Motifs de choix du LFJP',
                        font: {
                            size: 16,
                            family: "'Montserrat', sans-serif",
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }
    
    // Graphique 3: Qualité de l'information fournie aux parents (Radar Chart)
    const informationChart = document.getElementById('informationChart');
    if (informationChart) {
        new Chart(informationChart, {
            type: 'radar',
            data: {
                labels: [
                    'Inscriptions',
                    'Pronote',
                    'Actualité de l\'APE-LFJP',
                    'Paiement des écolages',
                    'Projets & activités',
                    'Sorties & voyages',
                    'Options & sections',
                    'Décisions budgétaires APE'
                ],
                datasets: [{
                    label: 'Note moyenne sur 5',
                    data: [4.13, 4.32, 4.02, 3.80, 3.79, 3.58, 3.39, 3.57],
                    backgroundColor: 'rgba(0, 85, 164, 0.2)',
                    borderColor: colors.primary,
                    borderWidth: 2,
                    pointBackgroundColor: colors.primary,
                    pointBorderColor: colors.tertiary,
                    pointHoverBackgroundColor: colors.tertiary,
                    pointHoverBorderColor: colors.primary
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 5
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}/5`;
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Qualité de l\'information fournie aux parents',
                        font: {
                            size: 16,
                            family: "'Montserrat', sans-serif",
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }
    
    // Graphique 4: Installations & Équipements (Bar Chart)
    const installationsChart = document.getElementById('installationsChart');
    if (installationsChart) {
        const installationsData = [2.41, 2.73, 2.96, 2.98, 2.94, 3.20, 3.50, 3.59];
        const backgroundColors = installationsData.map(value => {
            if (value < 3) return colors.negative;
            if (value < 3.5) return colors.neutral;
            return colors.positive;
        });
        
        new Chart(installationsChart, {
            type: 'bar',
            data: {
                labels: [
                    'Zones circulation externes',
                    'Équipements sportifs & vestiaires',
                    'Salles de classe',
                    'Sanitaires',
                    'Sécurité abords',
                    'Espaces verts & cour',
                    'CDI/BCD',
                    'Circulations internes'
                ],
                datasets: [{
                    label: 'Note moyenne sur 5',
                    data: installationsData,
                    backgroundColor: backgroundColors,
                    borderColor: colors.tertiary,
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 5,
                        title: {
                            display: true,
                            text: 'Note moyenne sur 5'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Note: ${context.raw}/5`;
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Évaluation des installations et équipements',
                        font: {
                            size: 16,
                            family: "'Montserrat', sans-serif",
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }
    
    // Graphique 5: Offre scolaire et enseignements (Radar Chart)
    const offreChart = document.getElementById('offreChart');
    if (offreChart) {
        new Chart(offreChart, {
            type: 'radar',
            data: {
                labels: [
                    'Enseignement du français',
                    'Citoyenneté & valeurs',
                    'Maths & sciences',
                    'Ouverture culturelle',
                    'Offre sportive',
                    'Offre linguistique (global)',
                    'Options payantes',
                    'Anglais / espagnol'
                ],
                datasets: [{
                    label: 'Note moyenne sur 5',
                    data: [3.77, 3.85, 3.56, 3.73, 3.34, 3.22, 3.04, 3.13],
                    backgroundColor: 'rgba(239, 65, 53, 0.2)',
                    borderColor: colors.secondary,
                    borderWidth: 2,
                    pointBackgroundColor: colors.secondary,
                    pointBorderColor: colors.tertiary,
                    pointHoverBackgroundColor: colors.tertiary,
                    pointHoverBorderColor: colors.secondary
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 5
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}/5`;
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Offre scolaire et enseignements',
                        font: {
                            size: 16,
                            family: "'Montserrat', sans-serif",
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }
    
    // Graphique 6: Accompagnement des élèves (Bar Chart)
    const accompagnementChart = document.getElementById('accompagnementChart');
    if (accompagnementChart) {
        new Chart(accompagnementChart, {
            type: 'bar',
            data: {
                labels: [
                    'ASEM (maternelle)',
                    'Professeur des écoles',
                    'Vie scolaire',
                    'Professeur principal (secondaire)',
                    'Professeurs du secondaire'
                ],
                datasets: [{
                    label: 'Note moyenne sur 5',
                    data: [4.24, 3.81, 3.71, 3.72, 3.54],
                    backgroundColor: getGradientColors(5, colors.positive, colors.neutral),
                    borderColor: colors.tertiary,
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 5,
                        title: {
                            display: true,
                            text: 'Note moyenne sur 5'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Note: ${context.raw}/5`;
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Accompagnement des élèves',
                        font: {
                            size: 16,
                            family: "'Montserrat', sans-serif",
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }
    
    // Graphique 7: Points forts perçus (Radar Chart)
    const pointsFortsChart = document.getElementById('pointsFortsChart');
    if (pointsFortsChart) {
        new Chart(pointsFortsChart, {
            type: 'radar',
            data: {
                labels: [
                    'Ouverture culturelle',
                    'Culture française',
                    'Inclusion',
                    'International',
                    'Sciences',
                    'Sport',
                    'Numérique',
                    'Plurilinguisme'
                ],
                datasets: [{
                    label: 'Note moyenne sur 5',
                    data: [3.73, 3.79, 3.41, 3.36, 3.22, 3.15, 3.18, 3.01],
                    backgroundColor: 'rgba(0, 155, 58, 0.2)',
                    borderColor: colors.positive,
                    borderWidth: 2,
                    pointBackgroundColor: colors.positive,
                    pointBorderColor: colors.tertiary,
                    pointHoverBackgroundColor: colors.tertiary,
                    pointHoverBorderColor: colors.positive
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 5
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}/5`;
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Points forts perçus',
                        font: {
                            size: 16,
                            family: "'Montserrat', sans-serif",
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }
    
    // Graphique 8: Priorités pour les prochaines années (Bar Chart)
    const prioritesChart = document.getElementById('prioritesChart');
    if (prioritesChart) {
        const prioritesData = [4.40, 4.33, 4.24, 3.92, 3.93, 3.48, 2.49, 2.68];
        const backgroundColors = prioritesData.map(value => {
            if (value >= 4) return colors.secondary;
            if (value >= 3.5) return colors.neutral;
            return colors.mediumGray;
        });
        
        new Chart(prioritesChart, {
            type: 'bar',
            data: {
                labels: [
                    'Restauration scolaire',
                    'Climatisation des salles',
                    'Développement du plurilinguisme',
                    'Numérique éducatif',
                    'Équipements sportifs',
                    'Transport scolaire',
                    'Garderie matinale',
                    'Augmentation des effectifs'
                ],
                datasets: [{
                    label: 'Note moyenne sur 5',
                    data: prioritesData,
                    backgroundColor: backgroundColors,
                    borderColor: colors.tertiary,
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 5,
                        title: {
                            display: true,
                            text: 'Note moyenne sur 5'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Priorité: ${context.raw}/5`;
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Priorités pour les prochaines années',
                        font: {
                            size: 16,
                            family: "'Montserrat', sans-serif",
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }
    
    // Graphique 9: Acceptabilité d'une hausse des écolages (Bar Chart)
    // Note: Les données exactes ne sont pas fournies, donc nous utilisons des valeurs fictives
    const ecolagesChart = document.getElementById('ecolagesChart');
    if (ecolagesChart) {
        new Chart(ecolagesChart, {
            type: 'bar',
            data: {
                labels: [
                    'Climatisation',
                    'Restauration',
                    'Équipements sportifs',
                    'Numérique éducatif',
                    'Couverture du terrain',
                    'Accueillir plus d\'élèves'
                ],
                datasets: [{
                    label: 'Pourcentage d\'acceptation',
                    data: [75, 70, 65, 60, 55, 30],
                    backgroundColor: getGradientColors(6, colors.positive, colors.negative),
                    borderColor: colors.tertiary,
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Pourcentage d\'acceptation'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Acceptation: ${context.raw}%`;
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Acceptabilité d\'une hausse des écolages',
                        font: {
                            size: 16,
                            family: "'Montserrat', sans-serif",
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }
});

