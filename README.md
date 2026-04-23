# 🏛️ Malla Soberana Muisca - Control de Ejecución (UpSet Plot)

![Versión](https://img.shields.io/badge/Versi%C3%B3n-2.0-emerald)
![Estado](https://img.shields.io/badge/Estado-Activo-success)
![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20Vanilla_JS%20%7C%20TailwindCSS-blue)
![Cliente](https://img.shields.io/badge/Cliente-FINDETER%20%7C%20MinTIC-slate)

Dashboard interactivo y estático diseñado para el seguimiento ejecutivo y la auditoría técnica del proyecto **"Modelos Fundacionales Soberanos de Inteligencia Artificial"** (UT T&T 2026). 

Esta herramienta utiliza una lógica de visualización **UpSet Plot** para mapear la Estructura de Desglose del Trabajo (EDT) contra los hitos contractuales y los compromisos documentados en las actas de gobernanza.

---

## 🎯 Objetivo Estratégico

Proveer a la gerencia del proyecto, a los supervisores de FINDETER y a MinTIC una herramienta de "Transparencia Activa". El dashboard permite visualizar de manera inmediata qué actividades de la EDT (eje vertical) han sido ejecutadas para cumplir cada hito contractual (eje horizontal), respaldando cada porcentaje de avance con fichas técnicas extraídas directamente de las actas de reunión.

## ⚙️ Arquitectura y Tecnologías

El proyecto fue construido bajo un enfoque de **cero fricción operativa** y alta seguridad (sin bases de datos externas vulnerables), ideal para entornos del sector público:

* **Frontend:** HTML5 semántico.
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (vía CDN) con una paleta de colores personalizada tipo "Blueprint" (Slate & Emerald) para una estética directiva y sobria.
* **Motor Lógico:** Vanilla JavaScript (`app.js`), encargado de la matemática visual de las intersecciones y las barras de progreso.
* **Capa de Datos:** Objeto JSON local (`registry.js`), que actúa como un gemelo digital de la matriz de ejecución en Google Sheets/Excel.

---

## 🚀 Instalación y Despliegue

Dada su arquitectura estática, no se requieren servidores de aplicaciones (Node.js, Python, etc.) ni procesos de *build*.

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/malla-soberana-dashboard.git](https://github.com/tu-usuario/malla-soberana-dashboard.git)


🛡️ Gobernanza y Casos de Uso (Bachué & Chiminigagua)
El dashboard rastrea transversalmente la evolución de los modelos fundacionales:

💧 Bachué: Hitos asociados a salud pública, triaje epidemiológico y anonimización de historias clínicas (Ley 1581).

🔥 Chiminigagua: Hitos enfocados en biodiversidad, bioeconomía y procesamiento de imágenes satelitales (Copernicus/Landsat).

📄 Licencia
Propiedad de la Unión Temporal T&T 2026. Proyecto desarrollado en el marco del contrato interadministrativo No. 2164 con el Fondo Único de TIC y FINDETER.
