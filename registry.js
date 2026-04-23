/* registry.js */
const DASHBOARD_DATA = {
    // Eje Vertical: Tus 15 actividades de la EDT Primer Nivel
    expectedItems: [
        "1. Showroom y Apropiación",
        "2. Socialización Centro IA",
        "3. Gobernanza y Arquitectura",
        "4. Plan Maestro Datos (PMD)",
        "5. Infraestructura Tecnológica",
        "6. Gestión y Preparación de Datos",
        "7. Model Card Salud",
        "8. Model Card Medio Ambiente",
        "9. CU: Predicción Epidemio",
        "10. CU: Procesamiento Anonimizado",
        "11. CU: Monitoreo Especies",
        "12. CU: Riesgos Ambientales",
        "13. Estrategia MLOps",
        "14. Migración y Despliegue",
        "15. Cierre y Transferencia"
    ],
    
    // Eje Horizontal: Tus Hitos y la matriz cruzada
    milestones: [
        {
            id: "H01",
            name: "SHOWROOM VIRTUAL",
            date: "2026-04-30",
            completion: 85, // Porcentaje real del Acta
            signature: [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Cruce con las 15 actividades
            details: "Arquitectura: Angular, MongoDB y Gemini API. Avatar: Chiminigagua (inclusivo). Entrega funcional al 30-Abril para evento Colombia 5.0 y presentación crítica ante el Viceministerio TIC (08-Mayo).",
            responsable: "TSG - Camilo Arias"
        },
        {
            id: "TEC01",
            name: "INFRAESTRUCTURA",
            date: "2026-04-20",
            completion: 75,
            signature: [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            details: "MVP: VMware Internexa (Entrega 20-Abril). Macro: AppSarStack en Colombia. Riesgo: Justificación técnica enviada para mitigar hallazgos de auditoría por uso de recursos.",
            responsable: "Internexa / TSG"
        },
        {
            id: "H02",
            name: "SOCIALIZACIÓN",
            date: "2026-05-22",
            completion: 0, 
            signature: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            details: "Evento pendiente de ejecución.",
            responsable: "UT T&T 2026"
        },
        {
            id: "H03",
            name: "GOBERNANZA",
            date: "2026-04-14",
            completion: 100,
            signature: [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            details: "Cambio Estratégico: Mesas semanales para agilizar decisiones. Ajuste: 153 actividades reestructuradas para asegurar 'victorias tempranas' antes del cambio de gobierno.",
            responsable: "TSG - Holman Bolívar"
        },
        {
            id: "H04",
            name: "SHOWROOM FISICO",
            date: "2026-07-31",
            completion: 0,
            signature: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            details: "Estrategia: Espacio físico acondicionado con infraestructura tecnológica instalada, integrada y en funcionamiento",
            responsable: "Talentum - Solangie Garavito"
        },
        {
            id: "H05",
            name: "PLAN MAESTRO DATOS",
            date: "2026-04-09",
            completion: 50,
            signature: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            details: "Estrategia: Activación de 'Plan B' urgente (academia, PENDATA) ante riesgo de silos. Arquitectura: Definición de modelo Medallón sobre modelos Open Source.",
            responsable: "TSG - Johnny Sierra, Andres Posada"
        },
        {
            id: "H06",
            name: "MODEL CARD DE MODELO FUNDACIONAL DE SALUD",
            date: "2026-07-24",
            completion: 0,
            signature: [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
            details: "Model Card completo con descripción del modelo, datos, desempeño, limitaciones y consideraciones éticas",
            responsable: "TSG"
        },
        {
            id: "H07",
            name: "MODEL CARD DE MODELO FUNDACIONAL DE MEDIO AMBIENTE",
            date: "2026-09-25",
            completion: 0,
            signature: [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0],
            details: "Model Card completo con descripción del modelo, datos, desempeño, limitaciones y consideraciones éticas",
            responsable: "TSG"
        },
        {
            id: "H08",
            name: "PROTOTIPO FUNCIONAL PRIMER CASO DE USO SALUD",
            date: "2026-10-23",
            completion: 0,
            signature: [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            details: "Caso de estudio validado (epidemiología)",
            responsable: "TSG"
        },
        {
            id: "H09",
            name: "PROTOTIPO FUNCIONAL SEGUNDO CASO DE USO SALUD",
            date: "2026-11-20",
            completion: 0,
            signature: [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            details: "Caso de estudio validado (anonimización)",
            responsable: "TSG"
        },
        {
            id: "H10",
            name: "PROTOTIPO FUNCIONAL PRIMER CASO DE USO MEDIOAMBIENTE",
            date: "2026-12-18",
            completion: 0,
            signature: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0],
            details: "Caso de estudio validado (bioeconomía)",
            responsable: "TSG"
        },
        {
            id: "H11",
            name: "PROTOTIPO FUNCIONAL SEGUNDO CASO DE USO MEDIOAMBIENTE",
            date: "2027-1-15",
            completion: 0,
            signature: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0],
            details: "Caso de estudio validado (biodiversidad)",
            responsable: "TSG"
        },
        {
            id: "H12",
            name: "PROPUESTA DE MIGRACIÓN Y PLAN DE ROLLBACK",
            date: "2027-2-04",
            completion: 0,
            signature: [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            details: "Estrategia de migración y rollback definida",
            responsable: "TSG"
        },
        {
            id: "H13",
            name: "PROGRAMA DE TRANSFERENCIA DE CONOCIMIENTO",
            date: "2027-5-14",
            completion: 0,
            signature: [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            details: "Sistema en producción y conocimiento transferido",
            responsable: "TSG"
        },
    ]
};