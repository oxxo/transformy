export function AccessibilityImprovements() {
  return (
    <div className="prose max-w-none">
      <h1>Mejoras de Accesibilidad Implementadas</h1>

      <h2>Componente de Carga de Fotos</h2>
      <p>Se han implementado las siguientes mejoras para hacer el componente de carga de fotos más accesible:</p>

      <h3>1. Roles ARIA y Etiquetas</h3>
      <ul>
        <li>
          Añadido <code>role="region"</code> al área de carga
        </li>
        <li>
          Implementado <code>aria-labelledby</code> y <code>aria-describedby</code> para proporcionar contexto
        </li>
        <li>
          Añadido <code>role="radiogroup"</code> para la selección de estilos
        </li>
        <li>
          Implementado <code>role="radio"</code> y <code>aria-checked</code> para cada opción de estilo
        </li>
        <li>
          Añadido <code>role="alert"</code> y <code>aria-live="assertive"</code> para mensajes de error
        </li>
        <li>
          Implementado <code>role="status"</code> y <code>aria-live="polite"</code> para mensajes de estado
        </li>
      </ul>

      <h3>2. Navegación por Teclado</h3>
      <ul>
        <li>
          El área de carga ahora es navegable por teclado con <code>tabIndex={0}</code>
        </li>
        <li>Se puede activar el selector de archivos con Enter o Space</li>
        <li>Las opciones de estilo son seleccionables mediante teclado</li>
        <li>Todos los controles interactivos son accesibles mediante teclado</li>
      </ul>

      <h3>3. Textos Alternativos y Descripciones</h3>
      <ul>
        <li>
          Añadido <code>alt</code> descriptivo para la imagen de vista previa
        </li>
        <li>
          Implementado <code>aria-label</code> para botones sin texto o con iconos
        </li>
        <li>
          Añadido <code>aria-describedby</code> para vincular controles con sus descripciones
        </li>
        <li>
          Implementado <code>sr-only</code> para textos exclusivos para lectores de pantalla
        </li>
      </ul>

      <h3>4. Feedback para Lectores de Pantalla</h3>
      <ul>
        <li>Anuncios dinámicos cuando se carga una imagen correctamente</li>
        <li>
          Mensajes de error anunciados inmediatamente con <code>aria-live="assertive"</code>
        </li>
        <li>
          Mensajes de estado anunciados con <code>aria-live="polite"</code>
        </li>
        <li>Feedback claro sobre el resultado de las acciones</li>
      </ul>

      <h3>5. Mejoras Visuales</h3>
      <ul>
        <li>Mayor contraste para mejorar la legibilidad</li>
        <li>Estados de foco visibles y consistentes</li>
        <li>Indicadores visuales claros para los estados de los controles</li>
        <li>Tamaños de texto adecuados para mejorar la legibilidad</li>
      </ul>

      <h2>Pruebas Recomendadas</h2>
      <p>Para verificar las mejoras de accesibilidad, se recomienda realizar las siguientes pruebas:</p>

      <ul>
        <li>Navegación completa del flujo usando solo el teclado</li>
        <li>Pruebas con lectores de pantalla (NVDA, VoiceOver, TalkBack)</li>
        <li>Verificación con herramientas automatizadas como Axe o Lighthouse</li>
        <li>Pruebas con usuarios que dependen de tecnologías de asistencia</li>
      </ul>
    </div>
  )
}
