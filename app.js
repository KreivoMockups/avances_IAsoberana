/* app.js */
function renderDashboard() {
    const expectedLabels = document.getElementById('expected-labels');
    const barsContainer = document.getElementById('bars-container');
    const matrixContainer = document.getElementById('matrix-container');

    // 1. Renderizar Eje Vertical (15 Actividades)
    DASHBOARD_DATA.expectedItems.forEach(item => {
        const div = document.createElement('div');
        div.className = "grid-row-label text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors";
        div.innerText = item;
        expectedLabels.appendChild(div);
    });

    // 2. Renderizar Columnas (Hitos)
    DASHBOARD_DATA.milestones.forEach((milestone, mIdx) => {
        
        // --- A. BARRAS SUPERIORES DE PORCENTAJE ---
        const barContainerWrap = document.createElement('div');
        barContainerWrap.className = "flex flex-col items-center justify-end h-full w-[40px] shrink-0";
        
        const bar = document.createElement('div');
        bar.className = "bar w-full h-[80px]";
        bar.id = `bar-${mIdx}`;
        bar.onclick = () => selectMilestone(mIdx);
        
        const fill = document.createElement('div');
        fill.className = "bar-fill";
        // Animación suave de llenado
        setTimeout(() => { fill.style.height = `${milestone.completion}%`; }, 100);
        
        bar.appendChild(fill);
        
        const label = document.createElement('span');
        label.className = "text-[10px] text-slate-400 mt-2 font-mono font-bold tracking-widest text-center h-4 block truncate w-full";
        label.innerText = milestone.id;
        
        const percent = document.createElement('span');
        percent.className = "text-sm text-white font-bold mb-1 drop-shadow-md";
        percent.innerText = `${milestone.completion}%`;

        barContainerWrap.appendChild(percent);
        barContainerWrap.appendChild(bar);
        barContainerWrap.appendChild(label);
        barsContainer.appendChild(barContainerWrap);

        // --- B. MATRIZ DE INTERSECCIÓN (PUNTOS Y LÍNEAS) ---
        const col = document.createElement('div');
        col.className = "flex flex-col relative w-[40px] shrink-0";
        col.id = `col-${mIdx}`;
        
        // Dibujar los 15 puntos
        milestone.signature.forEach((active) => {
            const rowWrap = document.createElement('div');
            rowWrap.className = "grid-row-dot";
            const circle = document.createElement('div');
            circle.className = `upset-matrix-circle ${active ? 'active' : ''}`;
            rowWrap.appendChild(circle);
            col.appendChild(rowWrap);
        });

        // Dibujar línea conectora si hay más de 1 punto activo
        const activeIndices = milestone.signature.map((val, i) => val === 1 ? i : -1).filter(i => i !== -1);
        if (activeIndices.length > 1) {
            const line = document.createElement('div');
            line.className = "upset-line";
            
            // Calculamos la altura exacta de la línea basados en la clase grid-row-dot (28px de alto)
            const topPosition = (activeIndices[0] * 28) + 14; 
            const bottomPosition = (activeIndices[activeIndices.length - 1] * 28) + 14;
            
            line.style.top = `${topPosition}px`;
            line.style.height = `${bottomPosition - topPosition}px`;
            col.appendChild(line);
        }

        matrixContainer.appendChild(col);
    });
}

function selectMilestone(idx) {
    const milestone = DASHBOARD_DATA.milestones[idx];
    
    // UI Highlights
    document.querySelectorAll('.bar').forEach(b => b.classList.remove('active', 'border-2', 'border-white'));
    document.getElementById(`bar-${idx}`).classList.add('active', 'border-2', 'border-white');
    
    const ficha = document.getElementById('ficha-tecnica');
    ficha.classList.remove('opacity-40');
    ficha.classList.add('opacity-100', 'border-emerald-500/50', 'shadow-[0_0_30px_rgba(46,204,113,0.1)]');
    
    // Inyectar Datos Reales
    document.getElementById('ficha-id').innerText = milestone.id;
    document.getElementById('ficha-title').innerText = milestone.name;
    document.getElementById('ficha-date').innerText = `Corte: ${milestone.date}`;
    document.getElementById('ficha-resp').innerText = `Responsable: ${milestone.responsable}`;
    
    // Formatear texto para resaltar etiquetas clave (ej. Arquitectura:, Riesgo:)
    const formattedDetails = milestone.details.replace(/(Arquitectura:|Riesgo:|Estrategia:|MVP:|Macro:|Cambio Estratégico:|Avatar:)/g, '<strong class="text-emerald-400">$1</strong>');
    document.getElementById('ficha-details').innerHTML = formattedDetails;
}

// Iniciar
renderDashboard();