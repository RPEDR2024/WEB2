let questions = []; // Este array se llenará según el tema seleccionado
let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const resultText = document.getElementById("result");
const nextButton = document.getElementById("nextBtn");
const homeButton = document.getElementById("homeBtn"); // Botón para volver a la página principal

const allQuestions = {
  ley10: [
    // Pregunta 1
    {
      question: "¿Cuándo entró en vigor la ley 10 de 1994?",
      options: [
        "26 de abril de 1994",
        "24 de julio de 1994",
        "15 de mayo de 1994",
        "10 de junio de 1994"
      ],
      answer: "24 de julio de 1994"
    },
    // Pregunta 2
    {
      question:
        "¿Cuántos miembros componen la Junta de Corredores, Vendedores y Empresas de Bienes Raíces?",
      options: [
        "5; 3 Corredores, 1 Abogado que representa al interés público, 1 persona de cualquier profesión que representa al consumidor",
        "4; 3 Corredores, 1 Abogado que representa al interés público, 1 persona de cualquier profesión que representa al consumidor",
        "5; 4 Corredores, 1 Abogado que representa a los consumidores e interés público",
        "4; 2 Corredores, 1 Abogado que representa al interés público, 1 persona de cualquier profesión que representa al consumidor"
      ],
      answer:
        "5; 3 Corredores, 1 Abogado que representa al interés público, 1 persona de cualquier profesión que representa al consumidor"
    },
    // Pregunta 3
    {
      question:
        "¿Cuántas veces al año la Junta ofrecerá el examen de Corredor y Vendedor de Bienes Raíces?",
      options: [
        "2 para Corredor y 2 para Vendedor y deben de transcurrir 60 días entre examen",
        "3 para Corredor y 3 para Vendedor y deben de transcurrir 60 días entre examen",
        "4 para Corredor y 2 para Vendedor y deben de transcurrir 60 días entre examen",
        "2 para Corredor y 3 para Vendedor y deben de transcurrir 30 días entre examen"
      ],
      answer:
        "2 para Corredor y 2 para Vendedor y deben de transcurrir 60 días entre examen"
    },
    // Pregunta 4
    {
      question: "El Reglamento que complementa la ley 10 de 1994 es:",
      options: [
        "5567 – Reglamento para implantar la ley 10",
        "Reglamento #5 - Reglamento sobre Competencia Justa para regular en Puerto Rico el Negocio de Bienes Raíces localizadas en Puerto Rico y sus territorios",
        "Reglamento #10 - Normativas para la Práctica Ética en Bienes Raíces",
        "Reglamento #2 - Normativas para la Publicidad en Bienes Raíces"
      ],
      answer: "5567 – Reglamento para implantar la ley 10"
    },
    // Pregunta 5
    {
      question: "Los miembros de la Junta de Bienes Raíces se deben reunir:",
      options: [
        "Una vez por trimestre del año natural",
        "Una vez por trimestre del año fiscal",
        "Dos veces al año",
        "Trimestralmente en reuniones especiales"
      ],
      answer: "Una vez por trimestre del año natural"
    },
    // Pregunta 6
    {
      question:
        "¿Cada cuánto tiempo se renuevan las licencias de Corredores Vendedores y Empresas de Bienes Raíces?",
      options: [
        "Anualmente",
        "Cada 4 años naturales",
        "Cada 4 años desde la fecha de expedición",
        "Cada 2 años naturales"
      ],
      answer: "Cada 4 años desde la fecha de expedición"
    },
    // Pregunta 7
    {
      question:
        "Pasados 90 días de estar vencida su licencia, usted tiene que:",
      options: [
        "Tomar nuevamente el curso preparatorio y el examen de reválida",
        "Hacer una declaración jurada haciendo constar que no ha hecho negocios con la licencia vencida",
        "Pagar una multa y presentar una solicitud de renovación",
        "Apelar la suspensión directamente ante el Departamento de Justicia"
      ],
      answer:
        "Hacer una declaración jurada haciendo constar que no ha hecho negocios con la licencia vencida"
    },
    // Pregunta 8
    {
      question: "La fianza para el Corredor y Vendedor es de:",
      options: [
        "$20,000 para el Corredor y $10,000 para el Vendedor",
        "$10,000 para el Corredor y $10,000 para el Vendedor",
        "$15,000 para el Corredor y $5,000 para el Vendedor",
        "$5,000 para el Corredor y $15,000 para el Vendedor"
      ],
      answer: "$10,000 para el Corredor y $10,000 para el Vendedor"
    },
    // Pregunta 9
    {
      question: "Se debe usar en los anuncios:",
      options: [
        "Número de cuenta plica",
        "Letras grandes",
        "Teléfonos y/o dirección, nombre y número de licencia",
        "Solo información básica sobre la propiedad"
      ],
      answer: "Teléfonos y/o dirección, nombre y número de licencia"
    },
    // Pregunta 10
    {
      question: "¿Qué ley creó (a) la Junta Examinadora?",
      options: ["Ley 139", "Ley 10", "Ley 567", "Ley 221"],
      answer: "Ley 139"
    },
    // Pregunta 11
    {
      question:
        "¿Qué ley creó (a) la Junta de Corredores, Vendedores y Empresas de Bienes Raíces?",
      options: [
        "Ley 139 del 14 de junio de 1980",
        "Ley 10 del 26 de abril de 1994",
        "Ley 567 del 30 de marzo de 1995",
        "Ley 221 del 15 de septiembre de 2000"
      ],
      answer: "Ley 10 del 26 de abril de 1994"
    },
    // Pregunta 12
    {
      question: "¿Qué regula el Reglamento #4?",
      options: [
        "La venta de propiedades localizadas en Puerto Rico",
        "La venta de propiedades localizadas fuera de Puerto Rico",
        "La publicidad de propiedades",
        "Las transacciones en línea de bienes raíces"
      ],
      answer: "La venta de propiedades localizadas fuera de Puerto Rico"
    },
    // Pregunta 13
    {
      question: "La cuenta de plica se conoce como:",
      options: [
        "Cuenta de ahorro",
        "Cuenta especial",
        "Cuenta fiduciaria",
        "Cuenta comercial"
      ],
      answer: "Cuenta especial"
    },
    // Pregunta 14
    {
      question:
        "La Junta de Bienes Raíces canceló la licencia de un Corredor de Bienes Raíces porque este no pagó la pensión alimentaria. La Junta:",
      options: ["Puede hacerlo", "No puede hacerlo"],
      answer: "Puede hacerlo"
    },
    // Pregunta 15
    {
      question: "La ley 10 de 26 de abril de 1994 es:",
      options: [
        "Ley para Reglamentar el Negocio de Bienes Raíces y la profesión de Corredor, Vendedor y Empresas de Bienes Raíces en Puerto Rico",
        "Ley para Reglamentar la profesión de Corredor, Vendedor y Empresa de Bienes Raíces en Puerto Rico",
        "Ley para Proteger a los Consumidores en Transacciones de Bienes Raíces",
        "Ley para Establecer Normas Éticas en el Negocio de Bienes Raíces"
      ],
      answer:
        "Ley para Reglamentar el Negocio de Bienes Raíces y la profesión de Corredor, Vendedor y Empresas de Bienes Raíces en Puerto Rico"
    },
    // Pregunta 16
    {
      question:
        "¿Cuánto tienen los Corredores, Vendedores y Empresas de bienes Raíces, una vez que reciben su licencia, para notificar a DACO sobre la cuenta Plica?",
      options: ["30 días", "Inmediatamente", "15 días", "60 días"],
      answer: "30 días"
    },
    // Pregunta 17
    {
      question:
        "Según la Ley 10, algunos de los requisitos para que la Junta de Bienes Raíces pueda expedir una licencia de Vendedor de Bienes Raíces son:",
      options: [
        "Curso de 60 horas de clases, 18 años, Diploma de Escuela Superior y presentar evidencia de la cuenta de plica del Corredor de Bienes Raíces o Empresa con la cual va a trabajar.",
        "Curso de 72 horas de clases, 18 años, Diploma de Escuela Superior y presentar evidencia de la cuenta de plica del Corredor de Bienes Raíces o Empresa con la cual va a trabajar.",
        "Curso de 50 horas de clases, 21 años, Diploma de Escuela Superior y presentar evidencia de la cuenta de plica del Corredor de Bienes Raíces o Empresa con la cual va a trabajar.",
        "Curso de 80 horas de clases, 16 años, Diploma de Escuela Superior y presentar evidencia de la cuenta de plica del Corredor de Bienes Raíces o Empresa con la cual va a trabajar."
      ],
      answer:
        "Curso de 60 horas de clases, 18 años, Diploma de Escuela Superior y presentar evidencia de la cuenta de plica del Corredor de Bienes Raíces o Empresa con la cual va a trabajar."
    },
    // Pregunta 18
    {
      question:
        "El Reglamento 5567 que complementa la Ley 10 impone multas de hasta:",
      options: ["$10,000", "$5,000", "$20,000", "$15,000"],
      answer: "$10,000"
    },
    // Pregunta 19
    {
      question:
        "¿Quién está a cargo de mantener un registro profesional actualizado de todas las licencias de Bienes Raíces?",
      options: [
        "La Junta",
        "DACO",
        "Departamento de Justicia",
        "Registro de Bienes Raíces de Puerto Rico"
      ],
      answer: "La Junta"
    },
    // Pregunta 20
    {
      question:
        "¿Qué se puede obtener en el registro profesional de Corredores, Vendedores y Empresas de bienes raíces?",
      options: [
        "Información de la cuenta plica",
        "Vigencia de la licencia",
        "Datos de la fianza",
        "Historial de transacciones"
      ],
      answer: "Vigencia de la licencia"
    },
    // Pregunta 21
    {
      question: "Reciprocidad significa",
      options: [
        "La concesión de licencia sin haber tomado el examen",
        "La concesión de licencia sin haber tomado el curso",
        "El intercambio de bienes raíces entre corredores",
        "La colaboración entre corredores de diferentes estados"
      ],
      answer: "La concesión de licencia sin haber tomado el examen"
    },
    // Pregunta 22
    {
      question: "¿Qué personas o figuras están exentos de la Ley 10?",
      options: [
        "Abogados, apoderados, albaceas y designados por tribunales",
        "Abogados, apoderados, albaceas, designados por tribunales y propietarios no habituales",
        "Solo abogados y apoderados",
        "Solo propietarios no habituales"
      ],
      answer:
        "Abogados, apoderados, albaceas, designados por tribunales y propietarios no habituales"
    },
    // Pregunta 23
    {
      question: "¿Cómo debe ser el examen de reválida?",
      options: [
        "Actualizado conforme a las leyes aplicables",
        "Proporcional a los temas del curso",
        "Similar al examen inicial",
        "Más difícil que el examen inicial"
      ],
      answer: "Proporcional a los temas del curso"
    },
    // Pregunta 24
    {
      question: "El examen de reválida se ofrece en:",
      options: [
        "Español",
        "Inglés",
        "Inglés o español, según lo solicite el aspirante",
        "En cualquier idioma que lo solicite el estudiante"
      ],
      answer: "Inglés o español, según lo solicite el aspirante"
    },
    // Pregunta 25
    {
      question:
        "La Ley 93 del 26 de mayo de 2006, ley que enmendó el Artículo 31 de la Ley Núm. 10 de 26 de abril de 1994, dispone lo siguiente:",
      options: [
        "Que hay que notificar y orientar al propietario previo a la firma del contrato de corretaje y al prospecto comprador previo al otorgamiento de un contrato de opción o compraventa, sobre la necesidad y conveniencia de realizar una inspección física de la propiedad por un profesional, debidamente licenciado por el Estado Libre Asociado de Puerto Rico.",
        "Que previo al otorgamiento de un contrato de corretaje o listado neto, hay que orientar adecuadamente al cliente sobre el alcance de la transacción y la conveniencia de utilizar los servicios de un tasador profesional.",
        "Que todo corredor debe publicar sus tarifas en un lugar visible de su oficina y proporcionarlas al cliente antes de iniciar cualquier transacción.",
        "Que los corredores deben realizar un informe anual de transacciones y presentarlo ante la Junta de Bienes Raíces."
      ],
      answer:
        "Que hay que notificar y orientar al propietario previo a la firma del contrato de corretaje y al prospecto comprador previo al otorgamiento de un contrato de opción o compraventa, sobre la necesidad y conveniencia de realizar una inspección física de la propiedad por un profesional, debidamente licenciado por el Estado Libre Asociado de Puerto Rico."
    },
    // Pregunta 26
    {
      question:
        "Toda persona que sin la licencia correspondiente se dedicare al ejercicio de la profesión de corredor o vendedor de bienes raíces en Puerto Rico, o que emplee a otra persona sin licencia para este ejercicio, incurrirá en:",
      options: [
        "Delito menos grave y convicta que fuere, será castigada con multa de quinientos (500) dólares o cárcel por un período no mayor de seis (6) meses o ambas penas, a discreción del tribunal.",
        "Delito grave y convicta que fuere, será castigada con multa de quinientos (500) dólares o cárcel por un período no mayor de seis (6) meses o ambas penas, a discreción del tribunal.",
        "Delito menos grave y convicta que fuere, será castigada con multa de mil (1,000) dólares o cárcel por un período no mayor de seis (6) meses o ambas penas, a discreción del tribunal.",
        "Delito grave y convicta que fuere, será castigada con multa de mil (1,000) dólares o cárcel por un período no mayor de seis (6) meses o ambas penas, a discreción del tribunal."
      ],
      answer:
        "Delito menos grave y convicta que fuere, será castigada con multa de quinientos (500) dólares o cárcel por un período no mayor de seis (6) meses o ambas penas, a discreción del tribunal."
    },
    // Pregunta 27
    {
      question:
        "Cuando sea final la transacción de compra o arrendamiento de una propiedad, el corredor tendrá un término máximo de horas para excluirla de cualquier listado de propiedades disponibles o para informar que la misma ya ha sido vendida y/o arrendada. El término es de:",
      options: ["24 horas", "36 horas", "72 horas", "48 horas"],
      answer: "72 horas"
    },
    // Pregunta 28
    {
      question:
        "El Reglamento Educativo 7962, derogado por el Reglamento 9101, integró cambios significativos relacionados a:",
      options: [
        "Las Escuelas de Bienes Raíces",
        "Los Instructores Generales y Especializados",
        "Las Empresas de Bienes Raíces",
        "Las Pruebas de Conocimiento"
      ],
      answer: "Los Instructores Generales y Especializados"
    },
    // Pregunta 29
    {
      question:
        "¿Cuál fue el cambio significativo en el Reglamento Educativo 9101 con respecto al requisito de que tanto el Instructor General como el Instructor Especializado fueran Corredores de Bienes Raíces?",
      options: [
        "Se elimina el requisito de que ambos Instructores tienen que ser Corredores de Bienes Raíces, ahora solo necesitan ser especialistas en su área",
        "Ahora el Instructor General tiene que ser Corredor de Bienes Raíces, pero no así el Instructor Especializado",
        "Se añaden a los Vendedores de Bienes Raíces como Instructores Generales"
      ],
      answer:
        "Ahora el Instructor General tiene que ser Corredor de Bienes Raíces, pero no así el Instructor Especializado"
    }
  ],
  etica: [
    // Pregunta 30
    {
      question:
        "Luis Corredor le recomienda a Pedro Comprador que financie la propiedad en “Banco Dorado” y le informa que él tiene intereses en dicho banco. Pedro Comprador accede a procesar el financiamiento con esa institución. Luis Corredor:",
      options: [
        "No fue ético porque hay un claro conflicto de interés.",
        "Es ético porque le informó al comprador que él tenía un interés particular con la institución.",
        "No fue ético ya que no debería influir en la decisión del comprador a pesar de informar su interés."
      ],
      answer:
        "Es ético porque le informó al comprador que él tenía un interés particular con la institución."
    },
    // Pregunta 31
    {
      question: "Según el reglamento de Ética, las ofertas se presentan:",
      options: ["Diligentemente.", "Objetivamente."],
      answer: "Objetivamente."
    },
    // Pregunta 32
    {
      question:
        "Un corredor está vendiendo una propiedad y tiene conocimiento de que dicha propiedad está en trámite de cambio de zonificación y no se lo notificó al comprador.",
      options: [
        "El corredor no fue ético porque el Corredor no debe ocultar información relacionada con la propiedad objeto de una transacción.",
        "El corredor fue ético porque el cambio de zonificación no ha ocurrido.",
        "El corredor fue ético si el cambio no afecta el valor o uso de la propiedad.",
        "No fue ético ya que la omisión de información relevante es contraria a la ética profesional."
      ],
      answer:
        "El corredor no fue ético porque el Corredor no debe ocultar información relacionada con la propiedad objeto de una transacción."
    },
    // Pregunta 33
    {
      question:
        "Juan Corredor le muestra una propiedad a Paco Comprador. El Comprador le solicitó al Corredor que incluya en el Precio de Venta los muebles y los enseres. El Corredor lo consultó con el dueño y este aceptó. Al cierre, el Dueño indica que ni los muebles ni los enseres van a estar incluidos en el precio de venta. El Corredor incurrió en una conducta:",
      options: [
        "Ética porque les dio conocimiento a ambas partes.",
        "No ética porque el Corredor debió haber puesto dicho acuerdo por escrito.",
        "Ética si se asegura de que el comprador reciba una compensación adecuada.",
        "No ética, ya que no garantizó el cumplimiento del acuerdo verbal."
      ],
      answer:
        "No ética porque el Corredor debió haber puesto dicho acuerdo por escrito."
    },
    // Pregunta 34
    {
      question:
        "En el cierre de una transacción, el Corredor se percata que una de las partes de la compraventa era hermano del Notario. El Corredor debe:",
      options: [
        "Detener inmediatamente el cierre y recomendar que se cambie el Notario.",
        "No hay problema, se puede proceder con el cierre.",
        "Informar a todas las partes involucradas y proceder solo con su consentimiento.",
        "Cambiar el Notario solo si hay indicios de parcialidad o conflicto de interés."
      ],
      answer:
        "Detener inmediatamente el cierre y recomendar que se cambie el Notario."
    },
    // Pregunta 35
    {
      question:
        "Mariana, dueña de la propiedad contrata a Juan Corredor y le indica que, si en 60 días no vende la propiedad por el precio de venta de $100,000 la venda por el balance de cancelación de $80,000. El Corredor se lo dice a hermano y transcurrido el término de 60 días, Juan Corredor presenta la oferta de su hermano por $80,000 a la dueña y ésta la acepta. ¿Por qué el Corredor NO fue ético?",
      options: [
        "No fue ético porque según el Reglamento de Ética las ofertas y contraofertas se deben presentar en una forma objetiva.",
        "No fue ético porque el Corredor no debió divulgar dicha información sin el consentimiento del dueño.",
        "Fue ético si el hermano presentó la mejor oferta disponible después de 60 días.",
        "No fue ético porque el Corredor utilizó información privilegiada para beneficio personal."
      ],
      answer:
        "No fue ético porque el Corredor no debió divulgar dicha información sin el consentimiento del dueño."
    },
    // Pregunta 36
    {
      question: "NO es un acto proscrito:",
      options: [
        "Poner el número de licencia en los anuncios.",
        "No exhibir al público en su lugar de trabajo la licencia expedida por la Junta.",
        "Ofrecer propiedades sin tener un acuerdo de representación."
      ],
      answer: "Poner el número de licencia en los anuncios."
    },
    // Pregunta 37
    {
      question:
        "Johnny Corredor tiene licencia activa, este se enteró que su vecino quiere vender la propiedad y por ello comenzó a anunciarla. El Corredor incurrió en una conducta:",
      options: [
        "Ética ya que su licencia está activa.",
        "No ética porque no puede ofrecer a propiedad a la venta sin el consentimiento del dueño.",
        "Ética si se obtiene el consentimiento posterior del dueño."
      ],
      answer:
        "No ética porque no puede ofrecer a propiedad a la venta sin el consentimiento del dueño."
    },
    // Pregunta 38
    {
      question:
        "Juan Corredor tenía un cierre el 30 de mayo, pero éste no podía comparecer ya que tenía otro compromiso. Juan no lo notificó a su cliente, pero habló con su amigo Pepe Corredor para que lo sustituyera en el cierre y este accedió y compareció por su amigo Juan. ¿Juan actuó éticamente?",
      options: [
        "Juan no fue ético porque tenía que haber mantenido informado de cualquier cambio relacionado a la transacción.",
        "Juan fue ético porque la transacción no se afectó de ninguna manera por este no haber comparecido.",
        "Juan fue ético si Pepe estaba igualmente calificado para manejar el cierre."
      ],
      answer:
        "Juan no fue ético porque tenía que haber mantenido informado de cualquier cambio relacionado a la transacción."
    },
    // Pregunta 39
    {
      question:
        "Will Corredor pasó por una propiedad que tiene un rótulo de venta de una propiedad por un colega corredor. Will tocó a la puerta y habló con el propietario para ofrecerle sus servicios. ¿Will NO fue ético?",
      options: [
        "No fue ético porque no se puede solicitar un listado que tenga carácter de exclusividad con otro Corredor o Vendedor.",
        "Sí fue ético porque debe de cooperar con otros corredores cuando ello sea en el mejor interés del cliente.",
        "Fue ético si el propietario no estaba satisfecho con el servicio del corredor actual."
      ],
      answer:
        "No fue ético porque no se puede solicitar un listado que tenga carácter de exclusividad con otro Corredor o Vendedor."
    },
    // Pregunta 40
    {
      question:
        "Bruno Díaz, Corredor de bienes raíces, se enteró que su colega Ricardo Tapia no está siendo eficiente en sus gestiones de corredor y que éste no consigue el mejor negocio para sus clientes. Bruno se comunicó con el propietario y le informó sobre el trabajo deficiente de Ricardo Tapia. ¿Bruno NO fue ético?",
      options: [
        "No fue ético porque no puede desacreditar la práctica de negocios de un competidor, ni expresar voluntariamente una opinión sobre una transacción de un competidor.",
        "Fue ético porque el corredor debe siempre velar por el mejor interés del cliente, además, Bruno no le solicitó al propietario que lo contratara a él como su corredor exclusivo.",
        "Fue ético si su intención era proteger los intereses del cliente y no obtener ventaja competitiva."
      ],
      answer:
        "No fue ético porque no puede desacreditar la práctica de negocios de un competidor, ni expresar voluntariamente una opinión sobre una transacción de un competidor."
    }
  ],
  daco: [
    // Pregunta 41
    {
      question:
        "La Agencia Administrativa que SUPERVISA el negocio de Bienes Raíces en Puerto Rico es:",
      options: [
        "DACO",
        "Junta de Corredores, Vendedores y Empresas de Bienes Raíces",
        "Departamento de Hacienda",
        "Comisión de Servicios Públicos"
      ],
      answer: "DACO"
    },
    // Pregunta 42
    {
      question:
        "Según la ley de DACO, el secretario tiene los siguientes poderes:",
      options: [
        "Reglamentar, fijar, controlar y revisar los precios",
        "Atender consultas y prestar ayuda legal a los consumidores",
        "Comparecer en representación de los consumidores ante cualquier Tribunal",
        "Todas las anteriores"
      ],
      answer: "Atender consultas y prestar ayuda legal a los consumidores"
    },
    // Pregunta 43
    {
      question: "El secretario de DACO tiene facultad de:",
      options: [
        "Imponer el Desacato",
        "Emitir una orden de Registro y Allanamiento",
        "Educar y orientar al consumidor",
        "Todas las anteriores"
      ],
      answer: "Educar y orientar al consumidor"
    },
    // Pregunta 44
    {
      question: "El Oficial Examinador es:",
      options: [
        "La persona que preside las Vistas Administrativas tanto cuasi legislativa como cuasi judicial",
        "La persona que preside un Juicio en un Tribunal",
        "La persona que es nombrada para emitir una orden o resolución",
        "La persona que inspecciona las oficinas de los corredores"
      ],
      answer:
        "La persona que preside las Vistas Administrativas tanto cuasi legislativa como cuasi judicial"
    },
    // Pregunta 45
    {
      question: "DACO puede imponer multas de hasta un máximo de:",
      options: ["$10,000", "$20,000", "$50,000", "$100,000"],
      answer: "$10,000"
    },
    // Pregunta 46
    {
      question: "DACO se creó a base de:",
      options: [
        "Una ley orgánica",
        "Un reglamento orgánico",
        "Una orden ejecutiva",
        "Una iniciativa legislativa"
      ],
      answer: "Una ley orgánica"
    },
    // Pregunta 47
    {
      question: "DACO tiene poderes:",
      options: [
        "Cuasi-judiciales",
        "Cuasi-legislativos",
        "Cuasi-judiciales y cuasi-legislativos",
        "Administrativos y de supervisión"
      ],
      answer: "Cuasi-judiciales y cuasi-legislativos"
    },
    // Pregunta 48
    {
      question: "Las siglas de DACO significan:",
      options: [
        "Departamento de Asuntos al Contribuyente",
        "Departamento de Asuntos al Consumidor",
        "Dirección de Administración de Control de Operaciones",
        "División de Asuntos Comerciales y Organizativos"
      ],
      answer: "Departamento de Asuntos al Consumidor"
    },
    // Pregunta 49
    {
      question: "El propósito primordial de DACO es:",
      options: [
        "Calificar los documentos que se presentan para su inscripción",
        "Imponer el Desacato",
        "Proteger los derechos de los Consumidores",
        "Todas las anteriores"
      ],
      answer: "Proteger los derechos de los Consumidores"
    },
    // Pregunta 50
    {
      question:
        "De cuánto es la fianza que le pide DACO al propietario que quiere vender propiedades ubicadas fuera de Puerto Rico en Puerto Rico:",
      options: ["1 millón o el 6%", "100,000", "500,000", "250,000"],
      answer: "1 millón o el 6%"
    },

    // Pregunta 51
    {
      question: "La fianza de 1 millón que exige DACO es para proteger:",
      options: [
        "Al Estado y al Comprador",
        "Al Propietario",
        "Los intereses del consumidor",
        "La integridad del mercado inmobiliario"
      ],
      answer: "Al Estado y al Comprador"
    },
    // Pregunta 52
    {
      question:
        "La parte adversamente afectada por una orden o resolución de DACO tiene derecho a presentar una Moción de Reconsideración dentro de:",
      options: [
        "20 días, desde el archivo de la notificación de la orden o resolución",
        "30 días, desde el archivo de la notificación de la orden o resolución",
        "15 días, desde el archivo de la notificación de la orden o resolución",
        "10 días, desde el archivo de la notificación de la orden o resolución"
      ],
      answer:
        "20 días, desde el archivo de la notificación de la orden o resolución"
    },
    // Pregunta 53
    {
      question: "Inscripción Subsiguiente en DACO significa:",
      options: [
        "Es la primera vez que se presenta en DACO material de promoción",
        "Es cualquier inscripción hecha ante el Departamento de Asuntos del Consumidor de información o material de promoción o venta relacionado con el ofrecimiento o la venta de bienes inmuebles localizados fuera del Estado Libre Asociado de Puerto Rico, a la cual haya precedido una inscripción inicial de, o cualquier alteración a la información o material de promoción relacionado con la venta de dichos bienes inmuebles.",
        "Es cualquier inscripción hecha ante el Departamento de Asuntos del Consumidor de información o material de promoción o venta relacionado con el ofrecimiento o la venta de bienes inmuebles localizados en Puerto Rico, a la cual haya precedido una inscripción inicial de, o cualquier alteración a la información o material de promoción relacionado con la venta de dichos bienes inmuebles."
      ],
      answer:
        "Es cualquier inscripción hecha ante el Departamento de Asuntos del Consumidor de información o material de promoción o venta relacionado con el ofrecimiento o la venta de bienes inmuebles localizados fuera del Estado Libre Asociado de Puerto Rico, a la cual haya precedido una inscripción inicial de, o cualquier alteración a la información o material de promoción relacionado con la venta de dichos bienes inmuebles."
    },
    // Pregunta 54
    {
      question:
        "La parte adversamente afectada por una orden o resolución de DACO que haya agotado todos los remedios administrativos podrá presentar una Solicitud de Revisión dentro de:",
      options: [
        "20 días, ante el Tribunal de Circuito de Apelaciones",
        "30 días, ante el Tribunal de Circuito de Apelaciones",
        "90 días, ante el Tribunal de Circuito de Apelaciones",
        "60 días, ante el Tribunal de Circuito de Apelaciones"
      ],
      answer: "30 días, ante el Tribunal de Circuito de Apelaciones"
    },
    // Pregunta 55
    {
      question: "Toda Corporación debe comparecer ante una Vista:",
      options: ["Con Abogado", "Sin Abogado", "Personalmente"],
      answer: "Con Abogado"
    },
    // Pregunta 56
    {
      question:
        "¿Qué puede hacer un Corredor si DACO emite una resolución en su contra?",
      options: [
        "Ir en auxilio al Tribunal Supremo",
        "Presentar una moción de reconsideración a DACO",
        "Presentar una moción de revisión a DACO"
      ],
      answer: "Presentar una moción de reconsideración a DACO"
    },
    // Pregunta 57
    {
      question:
        "Las Vistas Administrativas que se celebran en DACO son procedimientos:",
      options: [
        "Cuasi-judiciales",
        "Cuasi-legislativos",
        "Cuasi-judiciales y Cuasi-legislativos"
      ],
      answer: "Cuasi-judiciales"
    },
    // Pregunta 58
    {
      question: "La Conferencia con Antelación a la Vista se define como:",
      options: [
        "Oportunidad antes de la Vista para ver si su puede lograr un acuerdo",
        "Una orden o resolución de DACO",
        "Un procedimiento para establecer los hechos y pruebas",
        "Una reunión para determinar la agenda de la Vista"
      ],
      answer:
        "Oportunidad antes de la Vista para ver si su puede lograr un acuerdo"
    },
    // Pregunta 59
    {
      question:
        "Si DACO decide celebrar una Vista tiene el deber de notificarlo:",
      options: [
        "Con 15 días de anticipación",
        "Con 20 días de anticipación",
        "Con 30 días de anticipación",
        "Con 10 días de anticipación"
      ],
      answer: "Con 20 días de anticipación"
    },
    // Pregunta 60
    {
      question: "La Vista será:",
      options: [
        "Privada, a menos que se solicite pública y el funcionario que preside la Vista lo autorice",
        "Privada, a menos que se solicite pública",
        "Pública, a menos que se solicite privada y el funcionario que preside la Vista lo autorice"
      ],
      answer:
        "Pública, a menos que se solicite privada y el funcionario que preside la Vista lo autorice"
    },
    // Pregunta 61
    {
      question:
        "Un caso administrativo de bienes inmuebles en DACO debe ser resuelto en:",
      options: [
        "120 días calendarios.",
        "120 días laborables.",
        "90 días calendarios.",
        "90 días laborables."
      ],
      answer: "120 días laborables."
    },
    // Pregunta 62
    {
      question:
        "Después de concluida una Vista la orden o resolución final debe ser emitida, por escrito, dentro de:",
      options: ["90 días.", "120 días.", "180 días.", "60 días."],
      answer: "90 días."
    },
    // Pregunta 63
    {
      question:
        "Cuando la persona presenta una querella en DACO, la parte querellada tiene:",
      options: [
        "10 días para contestar la querella.",
        "20 días para contestar la querella.",
        "15 días para contestar la querella.",
        "30 días para contestar la querella."
      ],
      answer: "20 días para contestar la querella."
    },
    // Pregunta 64
    {
      question:
        "En todo Proceso Adjudicativo ante DACO se salvaguardarán los siguientes derechos:",
      options: [
        "Derecho a Notificación oportuna de los cargos o querellas en contra de una parte.",
        "Derecho a presentar evidencia y a una Adjudicación imparcial.",
        "Derecho a que la decisión sea basada en el expediente.",
        "Todas las anteriores."
      ],
      answer: "Todas las anteriores."
    }, // Pregunta 64
    {
      question:
        "En todo Proceso Adjudicativo ante DACO se salvaguardarán los siguientes derechos:",
      options: [
        "Derecho a Notificación oportuna de los cargos o querellas en contra de una parte.",
        "Derecho a presentar evidencia y a una Adjudicación imparcial.",
        "Derecho a que la decisión sea basada en el expediente.",
        "Todas las anteriores."
      ],
      answer: "Todas las anteriores."
    }
  ],
  leyCondominios: [
    // Pregunta 65
    {
      question: "La Fianza de Fidelidad no será menor de:",
      options: ["$25,000.", "$50,000.", "$10,000.", "$15,000."],
      answer: "$50,000."
    },
    // Pregunta 66
    {
      question: "Para enmendar un Reglamento en un condominio se necesita:",
      options: [
        "Unanimidad.",
        "2/3 partes de los titulares.",
        "Mayoría simple."
      ],
      answer: "2/3 partes de los titulares."
    },
    // Pregunta 67
    {
      question: "La Ley 272 del 2003 dispone:",
      options: [
        "Que todo dueño que renta a corto plazo (90 días o menos) debe de pagar un impuesto habitación (room tax) de 7%.",
        "Que todo dueño que renta a largo plazo debe de pagar un incentivo contributivo."
      ],
      answer:
        "Que todo dueño que renta a corto plazo (90 días o menos) debe de pagar un impuesto habitación (room tax) de 7%."
    },
    // Pregunta 68
    {
      question: "El estacionamiento en un Condominio puede ser:",
      options: [
        "Procomunal.",
        "Elemento Común General, Limitado, Privado.",
        "Asignado individualmente.",
        "De uso exclusivo."
      ],
      answer: "Elemento Común General, Limitado, Privado."
    },
    // Pregunta 69
    {
      question: "Para enajenar elementos comunes en un condominio necesita:",
      options: ["Unanimidad.", "Mayoría.", "2/3 de los titulares."],
      answer: "Unanimidad."
    },
    // Pregunta 70
    {
      question: "Un administrador de condominios necesita:",
      options: [
        "Licencia de Corredor o Vendedor.",
        "Registrarse en DACO.",
        "Certificación de un organismo profesional.",
        "Aprobación de la Junta de Titulares."
      ],
      answer: "Registrarse en DACO."
    },
    // Pregunta 71
    {
      question:
        "Según la ley de condominios el adquirente involuntario será responsable de pagar:",
      options: [
        "Las deudas por gastos comunes surgidas desde el momento de adquirir la propiedad excepto las partidas correspondientes a penalidades por atrasos o mora, derramas, intereses y sanciones atribuibles al titular, incluirá el balance corriente que se acumule desde la adquisición de dicho inmueble por parte del adquiriente involuntario.",
        "Las deudas por gastos comunes surgidas y no satisfechas durante los seis (6) meses anteriores al momento de adquirir la propiedad excepto las partidas correspondientes a penalidades por atrasos o mora, derramas, intereses y sanciones atribuibles al titular, incluirá el balance corriente que se acumule desde la adquisición de dicho inmueble por parte del adquiriente involuntario."
      ],
      answer:
        "Las deudas por gastos comunes surgidas y no satisfechas durante los seis (6) meses anteriores al momento de adquirir la propiedad excepto las partidas correspondientes a penalidades por atrasos o mora, derramas, intereses y sanciones atribuibles al titular, incluirá el balance corriente que se acumule desde la adquisición de dicho inmueble por parte del adquiriente involuntario."
    },
    // Pregunta 72
    {
      question:
        "Según la ley de condominios el adquirente voluntario debe pagar:",
      options: [
        "Será responsable de la totalidad de las deudas no satisfechas al momento de adquirir la Propiedad.",
        "Será responsable sólo de las deudas no satisfechas durante 6 meses anteriores al momento de adquirir la Propiedad.",
        "Será responsable de las deudas no satisfechas durante el último año.",
        "No será responsable de las deudas acumuladas por el titular anterior."
      ],
      answer:
        "Será responsable de la totalidad de las deudas no satisfechas al momento de adquirir la Propiedad."
    },
    // Pregunta 73
    {
      question: "La derrama en un condominio es:",
      options: [
        "Una cuota adicional no prevista en el presupuesto para un gasto o mejora extraordinaria.",
        "Un elemento común limitado.",
        "Un impuesto adicional para cubrir déficits.",
        "Una contribución para el fondo de reserva."
      ],
      answer:
        "Una cuota adicional no prevista en el presupuesto para un gasto o mejora extraordinaria."
    },
    // Pregunta 74
    {
      question: "Según la ley de condominios el Síndico lo nombra:",
      options: [
        "El tribunal o DACO por 6 meses.",
        "El DACO solamente.",
        "La Junta de Titulares.",
        "El administrador del condominio."
      ],
      answer: "El tribunal o DACO por 6 meses."
    },
    // Pregunta 75
    {
      question: "La azotea en un condominio es:",
      options: [
        "Un elemento común necesario.",
        "Un elemento común voluntario.",
        "Parte de los elementos comunes generales.",
        "Un espacio de uso exclusivo."
      ],
      answer: "Un elemento común voluntario."
    },
    // Pregunta 76
    {
      question:
        "Para gravar un elemento común en bajo la ley de Condominios tiene que ser por:",
      options: [
        "Mayoría.",
        "2/3 de titulares que a su vez tengan 2/3 partes de participaciones sobre los elementos comunes.",
        "Unanimidad.",
        "75% de los titulares."
      ],
      answer:
        "2/3 de titulares que a su vez tengan 2/3 partes de participaciones sobre los elementos comunes."
    },
    // Pregunta 77
    {
      question:
        "Según la ley de Condominios, el Poder otorgado por el dueño titular de un apartamento a otra persona para que lo represente en una reunión y pueda votar a nombre de dicho titular se llama:",
      options: ["Escritura de Poder.", "Mandato.", "Proxy.", "Autorización."],
      answer: "Proxy."
    },
    // Pregunta 78
    {
      question:
        "Cuando no se pueda constituir una Junta de Directores cualquier titular puede solicitar a DACO o al Tribunal que nombre:",
      options: [
        "Un Síndico por 6 meses.",
        "Un Administrador Interino por 6 meses.",
        "Un Administrador.",
        "Un Comité de Gestión Temporal."
      ],
      answer: "Un Síndico por 6 meses."
    },
    // Pregunta 79
    {
      question:
        "Según la ley, para que un condominio prive de las utilidades por cuotas de mantenimiento vencidas, el titular tiene que adeudar:",
      options: [
        "3 o más meses consecutivos de cuotas de mantenimiento.",
        "2 o más meses consecutivos de cuotas de mantenimiento.",
        "1 mes solamente.",
        "6 o más meses consecutivos de cuotas de mantenimiento."
      ],
      answer: "2 o más meses consecutivos de cuotas de mantenimiento."
    },
    // Pregunta 80
    {
      question:
        "¿Cuáles de los siguientes elementos comunes se considera un elemento común voluntario?",
      options: ["El vuelo.", "La Azotea.", "Techos.", "Los jardines."],
      answer: "La Azotea."
    },
    // Pregunta 81
    {
      question:
        "El Consejo de Titulares del Condominio 'Magno Cond' fue al Departamento de Estado a incorporar dicho consejo. El Consejo:",
      options: [
        "Puede constituirse en forma Corporativa.",
        "No puede constituirse en forma Corporativa.",
        "Solo puede constituirse en forma de Corporación Limitada."
      ],
      answer: "No puede constituirse en forma Corporativa."
    },
    // Pregunta 82
    {
      question:
        "En el Condominio 'Blue Lagoon' hay 25 apartamentos de los cuales 5 le pertenecen a Hugo y 4 de estos están rentados. Hugo quiere votar 5 veces en la reunión del Consejo de Titulares. Determine si Hugo tiene razón y porqué:",
      options: [
        "Sí, porque es dueño de 5 apartamentos.",
        "No, porque tiene derecho a 1 voto independientemente el número de apartamentos que tenga.",
        "No, porque los apartamentos están arrendados.",
        "Sí, pero solo por los apartamentos no arrendados."
      ],
      answer:
        "No, porque tiene derecho a 1 voto independientemente el número de apartamentos que tenga."
    },
    // Pregunta 83
    {
      question: "La definición de Apartamento según la ley de Condominios es:",
      options: [
        "Un apartamento es una unidad residencial privada que forma parte de un edificio o complejo de viviendas más grande. También conocido como piso, departamento o flat, un apartamento generalmente consta de un espacio habitable principal que incluye una o varias habitaciones, una cocina, un baño y posiblemente una sala de estar o comedor.",
        "Cualquier unidad de construcción en un inmueble sometido al régimen establecido en este capítulo, que se encuentre suficientemente delimitada y que consista en uno (1) o más espacios cúbicos total o parcialmente cerrados o abiertos, juntamente con sus anejos, si alguno, aunque estos no sean contiguos, siempre que tal unidad sea susceptible de cualquier tipo de aprovechamiento independiente y tenga salida directa a la vía pública o a determinada área privada.",
        "Propiedad ubicada en un edificio bajo el régimen de propiedad horizontal y que esté unida a otra por la misma pared. Los apartamentos suelen ser propiedad de un propietario o administrador de la propiedad y se alquilan o venden a individuos o familias que buscan un lugar para vivir. A diferencia de una casa unifamiliar, un apartamento se encuentra en un edificio compartido con otros apartamentos, y los residentes comparten ciertas áreas comunes, como pasillos, escaleras, ascensores y, en algunos casos, instalaciones como lavandería, gimnasio o áreas de recreación."
      ],
      answer:
        "Cualquier unidad de construcción en un inmueble sometido al régimen establecido en este capítulo, que se encuentre suficientemente delimitada y que consista en uno (1) o más espacios cúbicos total o parcialmente cerrados o abiertos, juntamente con sus anejos, si alguno, aunque estos no sean contiguos, siempre que tal unidad sea susceptible de cualquier tipo de aprovechamiento independiente y tenga salida directa a la vía pública o a determinada área privada."
    },
    // Pregunta 84
    {
      question:
        "John vive en el Condominio Playa Buena. John no ha pagado 4 meses corridos su cuota de mantenimiento por la cual se le ha privado temporeramente su derecho al voto en una reunión del Consejo de Titulares donde se discutirá sobre la construcción de una nueva piscina. John alega que puede votar porque la construcción de la piscina es un asunto que requiere el voto unánime de todos los titulares. Determine si John tiene razón.",
      options: [
        "No tiene razón porque la ley dispone que cuando un condómino debe 3 o más cuotas de mantenimiento consecutivos quedará privado de ejercer su derecho al voto, aún en asuntos que requieran unanimidad.",
        "No tiene razón porque la ley dispone que cuando un condómino debe 3 o más cuotas de mantenimiento quedará privado de ejercer su derecho al voto, aún en asuntos que requieran unanimidad.",
        "Tiene razón, ya que asuntos que requieren voto unánime son excepción a la regla general de privación de voto.",
        "Tiene razón, siempre que pague las cuotas adeudadas antes de la votación."
      ],
      answer:
        "No tiene razón porque la ley dispone que cuando un condómino debe 3 o más cuotas de mantenimiento quedará privado de ejercer su derecho al voto, aún en asuntos que requieran unanimidad."
    },
    // Pregunta 85
    {
      question: "La Escritura Matriz según la ley de Condominios incluye:",
      options: [
        "Descripción legal del terreno y edificio y apartamentos.",
        "Descripción de las áreas y elementos comunes y limitados.",
        "El uso del inmueble y de cada apartamento en forma clara.",
        "Todas las anteriores."
      ],
      answer: "Todas las anteriores."
    },
    // Pregunta 86
    {
      question:
        "Para enmendar el Reglamento en un Condominio bajo el régimen de Propiedad Horizontal se requiere:",
      options: [
        "Unanimidad.",
        "51% de todos los Titulares, que a su vez tengan 2/3 partes de participación sobre los elementos comunes.",
        "2/3 de los Titulares, que a su vez tengan 2/3 partes de participación sobre los elementos comunes.",
        "Mayoría simple de los titulares presentes en la asamblea."
      ],
      answer:
        "2/3 de los Titulares, que a su vez tengan 2/3 partes de participación sobre los elementos comunes."
    },
    // Pregunta 87
    {
      question:
        "Según la ley de Condominios, el Desarrollador tendrá que prestar una Fianza llamada:",
      options: [
        "Fianza de Desarrollador.",
        "Fianza de Fidelidad.",
        "Fianza de un Fiador.",
        "Fianza de Garantía."
      ],
      answer: "Fianza de Fidelidad."
    },
    // Pregunta 88
    {
      question: "Bajo la ley de Condominios el Comité de Conciliación:",
      options: [
        "Debe ser el Administrador.",
        "Compuesto por 5 titulares, uno de ellos tiene que ser de la Junta de Directores, excluido el Presidente.",
        "Compuesto por 3 titulares, uno de ellos tiene que ser de la Junta de Directores, excluido el Presidente.",
        "Es un comité independiente sin la necesidad de tener un miembro de la Junta de Directores."
      ],
      answer:
        "Compuesto por 3 titulares, uno de ellos tiene que ser de la Junta de Directores, excluido el Presidente."
    },
    // Pregunta 89
    {
      question: "Quiénes pueden representar a un titular mediante proxy:",
      options: [
        "Personas mayores de edad que a su vez sean titulares y familiares del Titular hasta segundo grado de consanguinidad.",
        "El cónyuge del titular, su Abogado y su mandatario mediante poder.",
        "Los arrendatarios del Titular.",
        "Todas las anteriores."
      ],
      answer: "Todas las anteriores."
    },
    // Pregunta 90
    {
      question: "Las actas en cada reunión la firma:",
      options: [
        "El Presidente y Secretario.",
        "El Presidente.",
        "El Secretario.",
        "El Presidente y el Administrador del Condominio."
      ],
      answer: "El Presidente y Secretario."
    },
    // Pregunta 91
    {
      question:
        "Bajo la ley de Condominios el titular perderá su derecho a votar:",
      options: [
        "Cuando el titular moroso deba 3 o más pagos de mantenimiento y/o derramas y/o multas vencidas por más de 60 días y/o primas del seguro matriz.",
        "Cuando el titular moroso deba 3 o más pagos de mantenimiento.",
        "Cuando deje de pagar un solo mes de mantenimiento.",
        "Cuando el titular moroso deba cualquier cantidad por más de 30 días."
      ],
      answer:
        "Cuando el titular moroso deba 3 o más pagos de mantenimiento y/o derramas y/o multas vencidas por más de 60 días y/o primas del seguro matriz."
    },
    // Pregunta 92
    {
      question: "La Escritura Matriz de un Condominio:",
      options: [
        "No se tiene que inscribir en el Registro de la Propiedad.",
        "Establece el régimen de Propiedad Horizontal y tiene que expresar clara y precisa el destino y uso de toda área del inmueble.",
        "Se hace por declaración jurada.",
        "Debe ser aprobada por todos los titulares."
      ],
      answer: "No se tiene que inscribir en el Registro de la Propiedad."
    },
    // Pregunta 93
    {
      question: "Los Elementos Procomunales son:",
      options: [
        "Son áreas de la Junta de Directores.",
        "Aquellas áreas limitadas por varios titulares.",
        "Aquellas áreas susceptibles de aprovechamiento independiente cuya titularidad se le ha asignado el Consejo de Titulares.",
        "Áreas comunes generales utilizadas por todos los titulares."
      ],
      answer:
        "Aquellas áreas susceptibles de aprovechamiento independiente cuya titularidad se le ha asignado el Consejo de Titulares."
    },
    // Pregunta 94
    {
      question: "La Junta de Directores está compuesta por:",
      options: [
        "Presidente, Secretario, Tesorero y elegidos por el Consejo de Titulares.",
        "Presidente y Vice-Presidente.",
        "El Administrador.",
        "Representantes elegidos por cada piso o sección del condominio."
      ],
      answer:
        "Presidente, Secretario, Tesorero y elegidos por el Consejo de Titulares."
    },
    // Pregunta 95
    {
      question: "El Comité de Transición bajo la ley de Condominios es:",
      options: [
        "El comité creado por ley para aprobar el presupuesto del condominio.",
        "El comité creado para cuando se hace la transición de la administración del Desarrollador a los titulares.",
        "Un comité temporal para gestionar disputas entre titulares.",
        "Un comité para revisar y proponer cambios al reglamento del condominio."
      ],
      answer:
        "El comité creado para cuando se hace la transición de la administración del Desarrollador a los titulares."
    },
    // Pregunta 96
    {
      question:
        "El Consejo de Titulares de un Condominio tiene que elegir por mayoría a:",
      options: [
        "El Presidente, Secretario, Tesorero y Administrador.",
        "Al Administrador y al Síndico.",
        "Sólo al presidente."
      ],
      answer: "El Presidente, Secretario, Tesorero y Administrador."
    },
    // Pregunta 97
    {
      question:
        "¿Cuándo se constituye el Comité de Transición bajo la Ley de Condominios de P.R.?",
      options: [
        "Cuando se haya vendido el 40% de los apartamentos, y el Desarrollador convoque a los titulares a una asamblea a esos efectos. También podrá ser constituido en cualquier momento previo a la venta del 40% mediante la celebración de una asamblea, convocada por cualquier titular que no sea el Administrador Interino o Desarrollador.",
        "Cuando se haya vendido el 51% de los apartamentos, y el Desarrollador convoque a los titulares a una asamblea a esos efectos. También podrá ser constituido en cualquier momento previo a la venta del 50% mediante la celebración de una asamblea, convocada por cualquier titular que no sea el Administrador Interino o Desarrollador."
      ],
      answer:
        "Cuando se haya vendido el 40% de los apartamentos, y el Desarrollador convoque a los titulares a una asamblea a esos efectos. También podrá ser constituido en cualquier momento previo a la venta del 40% mediante la celebración de una asamblea, convocada por cualquier titular que no sea el Administrador Interino o Desarrollador."
    },
    // Pregunta 98
    {
      question:
        "Bajo la ley de Condominios al Administrador Interino se le requiere una Fianza de Fidelidad que:",
      options: [
        "Cubre el 100% de las cuotas de mantenimiento.",
        -"Será a favor del Consejo de Titulares.",
        "No será menor $50,000.",
        "Todas las anteriores."
      ],
      answer: "Todas las anteriores."
    },
    // Pregunta 99
    {
      question:
        "Bajo la Ley de Condominios son Elementos Comunes Generales Necesarios:",
      options: [
        "Áreas verdes y árboles requeridos por el ELA y paredes maestras.",
        "La azotea, el terreno y los sótanos.",
        "Todas las anteriores.",
        "Solo las estructuras esenciales para el mantenimiento del condominio."
      ],
      answer: "Áreas verdes y árboles requeridos por el ELA y paredes maestras."
    },
    // Pregunta 100
    {
      question:
        "Si la cuota de mantenimiento del Condominio Blue Lagoon es de $250.00 mensuales y el condómino debe 6 meses de mantenimiento, ¿cuánto dinero debe en total?:",
      options: ["$750.", "$1,500.", "$1,650.", "$2,000."],
      answer: "$1,500."
    },

    // Pregunta 101
    {
      question: "Se considera un elemento común limitado:",
      options: [
        "El pasillo de un piso en particular del Condominio.",
        "El estacionamiento designado para visitas.",
        "La piscina.",
        "Las zonas de recreo exclusivas para algunos titulares."
      ],
      answer: "El pasillo de un piso en particular del Condominio."
    },
    // Pregunta 102
    {
      question:
        "¿Cuál de los siguientes se considera un elemento común general necesario?",
      options: ["La azotea.", "El vuelo.", "El terreno.", "Los ascensores."],
      answer: "El vuelo."
    },
    // Pregunta 103
    {
      question: "La Ley de Condominios es la:",
      options: [
        "Ley 103 de 5 de abril de 2003.",
        "Ley 129 de 16 de agosto de 2020.",
        "Ley 104 de 25 de junio de 1958.",
        "Ley 31 de 18 de septiembre de 1987."
      ],
      answer: "Ley 129 de 16 de agosto de 2020."
    },
    // Pregunta 104
    {
      question:
        "En un control de acceso, ¿A quién se le puede permitir la entrada sin el debido protocolo de seguridad?",
      options: [
        "Policía Estatal o Municipal.",
        "Bomberos.",
        "Cualquier servicio de emergencia.",
        "Todas las anteriores."
      ],
      answer: "Todas las anteriores."
    },
    // Pregunta 105
    {
      question:
        "Toda persona que adquiera el título de una residencia en una urbanización, calle o comunidad donde se haya establecido un sistema de control de acceso notificará al Consejo, Junta o Asociación de Residentes; su nombre, dirección y fecha en que adquirió la propiedad. Todo esto no más tarde de:",
      options: [
        "15 días siguientes a la fecha de adquisición.",
        "30 días siguientes a la fecha de adquisición.",
        "60 días siguientes a la fecha de adquisición.",
        "10 días siguientes a la fecha de adquisición."
      ],
      answer: "30 días siguientes a la fecha de adquisición."
    }
  ],
  legal1: [
    // Pregunta 106
    {
      question:
        "¿El corredor de bienes raíces es responsable por los vicios ocultos de una propiedad?",
      options: ["No es responsable.", "Es responsable."],
      answer: "No es responsable."
    },
    // Pregunta 107
    {
      question:
        "Según el nuevo Código Civil, ¿Quién escoge al Notario en una compraventa?",
      options: [
        "El que escoge el Notario pagará sus honorarios, salvo pacto en contrario.",
        "Lo escoge el comprador y lo paga el vendedor, salvo pacto en contrario.",
        "Lo escoge el vendedor y lo paga el comprador, salvo pacto en contrario."
      ],
      answer:
        "El que escoge el Notario pagará sus honorarios, salvo pacto en contrario."
    },
    // Pregunta 108
    {
      question: "Los contratos de corretaje son:",
      options: [
        "Abierto, exclusivo, semi exclusivo y neto.",
        "Abierto, exclusivo y semi exclusivo.",
        "Exclusivo, semi exclusivo, co-broke y general.",
        "Exclusivo, general y de mandato."
      ],
      answer: "Abierto, exclusivo y semi exclusivo."
    },
    // Pregunta 109
    {
      question:
        "Con relación a los contratos de corretaje, ¿Cuándo se requiere que el Corredor oriente adecuadamente al cliente sobre el alcance de la transacción y la conveniencia de utilizar los servicios de un tasador profesional?",
      options: [
        "Previo al otorgamiento de un Contrato de Arrendamiento con Opción a Compra.",
        "Previo al otorgamiento de un Contrato de Corretaje con modalidad neta.",
        "Es requerido siempre en cualquier tipo de Contrato de Corretaje.",
        "Solo cuando el cliente lo solicita expresamente."
      ],
      answer:
        "Previo al otorgamiento de un Contrato de Corretaje con modalidad neta."
    },
    // Pregunta 110
    {
      question:
        "En un arrendamiento, cuando hay que hacer una reparación urgente, el Arrendatario tiene derecho a una reducción en la renta cuando:",
      options: [
        "Pasan más de 30 días.",
        "Pasan más de 40 días.",
        "El arrendador no inicia las reparaciones en un tiempo razonable.",
        "El arrendatario tiene que realizar la reparación por su cuenta."
      ],
      answer: "Pasan más de 40 días."
    },
    // Pregunta 111
    {
      question: "Cuando un otorgante no sepa leer:",
      options: [
        "1 testigo y el Notario (ambos) tienen que leer la escritura en alta voz.",
        "Se necesitan 3 testigos instrumentales idóneos.",
        "El documento debe ser leído por el notario",
        "Se requiere la presencia de un traductor oficial."
      ],
      answer:
        "1 testigo y el Notario (ambos) tienen que leer la escritura en alta voz."
    }, // Pregunta 112
    {
      question: "Cuando un otorgante es ciego:",
      options: [
        "El instrumento deberá ser leído dos veces; una por el Notario y otra por un (1) testigo que dicho otorgante designe.",
        "El instrumento deberá ser leído dos veces; por dos (2) testigos que dicho otorgante designe.",
        "El documento debe ser explicado en detalle por el Notario.",
        "Se requiere un intérprete especializado."
      ],
      answer:
        "El instrumento deberá ser leído dos veces; una por el Notario y otra por un (1) testigo que dicho otorgante designe."
    },
    // Question 113
    {
      question: "El contrato de opción de compraventa:",
      options: [
        "El comprador tiene la opción de cumplir con el contrato y el dueño se obliga. Es un contrato unilateral.",
        "El comprador tiene la obligación de comprar y el dueño se obliga a vender. Es un contrato bilateral.",
        "Ambas partes tienen igual obligación de cumplir. Es un contrato bilateral."
      ],
      answer:
        "El comprador tiene la opción de cumplir con el contrato y el dueño se obliga. Es un contrato unilateral."
    }, // Pregunta 114
    {
      question: "En una compraventa el Comprador se obliga a pagar:",
      options: [
        "Los honorarios y sellos de la escritura original.",
        "Los honorarios y sellos de la copia certificada más los comprobantes de inscripción."
      ],
      answer:
        "Los honorarios y sellos de la copia certificada más los comprobantes de inscripción."
    },
    // Pregunta 115
    {
      question:
        "Para que se dé la tácita reconducción en un contrato de arrendamiento el arrendatario tiene que seguir poseyendo la propiedad por:",
      options: [
        "20 días.",
        "15 días.",
        "30 días.",
        "Un periodo acordado previamente."
      ],
      answer: "15 días."
    },
    // Pregunta 116
    {
      question: "Si una de las partes en una escritura se le olvidó firmar:",
      options: [
        "Se tiene que hacer Acta de subsanación.",
        "El documento es nulo.",
        "Se puede firmar posteriormente ante Notario.",
        "El documento es válido si el Notario certifica la omisión."
      ],
      answer: "El documento es nulo."
    },
    // Pregunta 117
    {
      question: "La Sociedad Legal de Gananciales es:",
      options: [
        "Formada por esposo, esposa e hijos.",
        "El régimen económico por ley que surge del matrimonio.",
        "La que surge de las capitulaciones matrimoniales."
      ],
      answer: "El régimen económico por ley que surge del matrimonio."
    },
    // Pregunta 118
    {
      question:
        "Arrendador y Arrendatario hicieron un contrato de arrendamiento por un año y acordaron inscribirlo en el Registro de la Propiedad. A los 6 meses, Arrendador vende la propiedad a otra persona. Arrendador le exige a Arrendatario que abandone la propiedad porque la vendió. Determine si Arrendador tiene derecho:",
      options: [
        "Si, porque la ley dice que venta quita renta.",
        "No, porque solamente se puede registrar un arrendamiento de 6 años o más.",
        "No, porque el contrato está inscrito en el Registro de la Propiedad y tiene que respetarse el contrato de Arrendamiento.",
        "Si, pero debe compensar al arrendatario por la terminación anticipada."
      ],
      answer:
        "No, porque el contrato está inscrito en el Registro de la Propiedad y tiene que respetarse el contrato de Arrendamiento."
    }, // Pregunta 119
    {
      question:
        "El contrato en que varios Corredores puede vender la propiedad a cambio de una comisión es el:",
      options: [
        "Contrato Exclusivo abierto.",
        "Contrato Semiexclusivo con acuerdo neto.",
        "Contrato Abierto.",
        "Contrato de Co-broke."
      ],
      answer: "Contrato Abierto."
    },
    // Pregunta 120
    {
      question:
        "El Contrato en que un Corredor se obliga como Intermediario con un Propietario se llama:",
      options: [
        "Contrato de Co-broke.",
        "Contrato de Corretaje.",
        "Contrato de Opción.",
        "Contrato de Mandato."
      ],
      answer: "Contrato de Corretaje."
    },
    // Pregunta 121
    {
      question:
        "A Juanito por sentencia final y firme, le quitaron su Propiedad a base de que la persona que le vendió su casa no era el dueño real. ¿Qué derecho si alguno tiene Juanito contra el que le vendió?:",
      options: [
        "Saneamiento por Evicción.",
        "Saneamiento por Vicios Ocultos.",
        "Saneamiento por Usucapión.",
        "Ningún derecho, ya que la venta fue de buena fe."
      ],
      answer: "Saneamiento por Evicción."
    },
    // Pregunta 122
    {
      question:
        "Benito Comprador adquirió una casa en San Germán. A los 4 meses, se percata que el techo se filtraba a tal punto que no se podía vivir. Él no sabía de la filtración cuando compró la propiedad ya que no se veía a simple vista. Benito tiene derecho a:",
      options: [
        "Saneamiento por Evicción.",
        "Saneamiento por Vicios Ocultos y tiene 6 meses.",
        "Saneamiento por Vicios Ocultos y tiene 4 años.",
        "Ningún derecho, ya que la filtración se considera un riesgo asumido al comprar."
      ],
      answer: "Saneamiento por Vicios Ocultos y tiene 6 meses."
    },
    // Pregunta 123
    {
      question:
        "Pedro construyó una edificación en el terreno de Hugo con su permiso. Ambos llegaron a un acuerdo de que Pedro se va a quedar en el terreno por 3 años. Qué derecho, si alguno, tiene Pedro al vencer el acuerdo:",
      options: [
        "Al reembolso del costo de los materiales y mano de obra.",
        "A reclamarle a José que le venda el Terreno.",
        "No tiene derecho a nada.",
        "Derecho a retirar la edificación si es posible sin dañar el terreno."
      ],
      answer: "Al reembolso del costo de los materiales y mano de obra."
    },
    // Pregunta 124
    {
      question: "La Tácita Reconducción significa:",
      options: [
        "Que el Arrendador se queda en la posesión por lo menos 15 días desde el vencimiento del contrato de arrendamiento sin que el Arrendatario le requiera que se vaya.",
        "Que el Arrendatario se queda en la posesión por lo menos 15 días desde el vencimiento del contrato de arrendamiento sin que el Arrendador le requiera que se vaya.",
        "Que cualquiera de las partes se puede quedar en posesión por lo menos 15 días desde el vencimiento del contrato de arrendamiento.",
        "Renovación automática del contrato de arrendamiento por un periodo igual al inicial."
      ],
      answer:
        "Que el Arrendatario se queda en la posesión por lo menos 15 días desde el vencimiento del contrato de arrendamiento sin que el Arrendador le requiera que se vaya."
    }, // Pregunta 125
    {
      question: "En el Contrato de Arrendamiento el Arrendatario tiene que:",
      options: [
        "Realizar o pagar las mejoras necesarias para el uso.",
        "Usar la casa arrendada como un diligente padre de familia.",
        "Abstenerse de realizar mejoras que disminuyan el uso convenido.",
        "Mantener la propiedad en las mismas condiciones en que la recibió."
      ],
      answer: "Usar la casa arrendada como un diligente padre de familia."
    },
    // Pregunta 126
    {
      question:
        "Hugo Notario autorizó un Testamento Abierto cumpliendo todas las formalidades que la ley requiere. Hugo notificó al Registro de Testamento a las 72 horas. ¿Hugo Notario cumplió con la ley?",
      options: [
        "Sí, porque cumplió con todas las formalidades que la ley requiere.",
        "Sí, porque notificó al Registro de Testamento en 72 horas.",
        "No, porque tenía 24 horas para notificarlo al Registro de Testamento.",
        "No, porque la notificación debía hacerse inmediatamente."
      ],
      answer:
        "No, porque tenía 24 horas para notificarlo al Registro de Testamento."
    },
    // Pregunta 127
    {
      question:
        "José se casó con María bajo la Sociedad Legal de Gananciales. Compraron una casa como inversión y decidieron arrendarla. En el Contrato de Arrendamiento solo aparece la firma de María. Determine si el Contrato de Arrendamiento es legal:",
      options: [
        "Ilegal, porque necesita las firmas de ambos.",
        "Ilegal, porque el Arrendamiento de un acto de disposición o enajenación.",
        "Legal, porque el Arrendamiento es un acto de administración.",
        "Legal, siempre que María tenga autorización expresa de José."
      ],
      answer: "Legal, porque el Arrendamiento es un acto de administración."
    }, // Pregunta 128
    {
      question: "Tipos de Testamento:",
      options: [
        "Abierto y Ológrafo.",
        "Ológrafo y Cerrado.",
        "Abierto y Cerrado.",
        "Cerrado y por acto público."
      ],
      answer: "Abierto y Ológrafo."
    },
    // Pregunta 129
    {
      question:
        "En qué momento un Corredor de Bienes Raíces tiene derecho a cobrar su comisión:",
      options: [
        "Desde que firma el contrato de corretaje.",
        "En el momento del cierre.",
        "Desde que consigue un Cliente listo, dispuesto y capaz.",
        "Al concluir exitosamente la transacción inmobiliaria."
      ],
      answer: "Desde que consigue un Cliente listo, dispuesto y capaz."
    },
    // Pregunta 130
    {
      question: "La Cláusula 'Due on Sale' o cláusula de Aceleración es:",
      options: [
        "La que obliga la inscripción rápida del Inmueble en el Registro de la Propiedad.",
        "La que da derecho a declarar vencida una deuda.",
        "Es una cláusula inválida y nula.",
        "Una cláusula que permite al acreedor exigir el pago total al venderse la propiedad."
      ],
      answer: "La que da derecho a declarar vencida una deuda."
    }, // Pregunta 131
    {
      question: "En una reparación urgente, el arrendatario:",
      options: [
        "Debe ser discreto.",
        "Debe avisar de la reparación urgentemente.",
        "Puede realizar la reparación y luego reclamar al arrendador.",
        "Debe esperar a que el arrendador realice la reparación."
      ],
      answer: "Debe avisar de la reparación urgentemente."
    },
    // Pregunta 132
    {
      question: "En un Contrato de Opción de Compraventa, el Dueño se llama:",
      options: ["Optante.", "Optatario.", "Oferente.", "Beneficiario."],
      answer: "Optatario."
    },
    // Pregunta 133
    {
      question:
        "John Comprador tiene duda en la compraventa de una propiedad de los gastos legales que tiene que pagar. Salvo pacto en contrario, John Comprador está obligado a pagar:",
      options: [
        "Los gastos de la escritura original y la inscripción en el registro inmobiliario.",
        "Los gastos de la escritura original, los gastos de la copia certificada y la inscripción en el registro inmobiliario.",
        "Los gastos de la copia certificada y la inscripción en el registro inmobiliario.",
        "Todos los gastos legales y de registro asociados a la transacción."
      ],
      answer:
        "Los gastos de la escritura original y la inscripción en el registro inmobiliario."
    }, // Pregunta 134
    {
      question:
        "Ramón Notario autorizó una Escritura de Compraventa de una propiedad en Carolina. Sin embargo, la parte Vendedora no firmó la misma. Determine que puede hacer el Notario para corregir la falta:",
      options: [
        "Hacer una Escritura de Rectificación.",
        "Hacer un Acta de Subsanación.",
        "No puede corregir el error porque la Escritura es Nula.",
        "Convocar nuevamente a las partes para firmar la escritura."
      ],
      answer: "No puede corregir el error porque la Escritura es Nula."
    },
    // Pregunta 135
    {
      question: "Cuando se hace un acta subsanación:",
      options: [
        "No hay otorgantes, hay requirentes.",
        "Tienen que comparecer los otorgantes al momento presentar la subsanación.",
        "Solo necesita la firma del Notario.",
        "Se debe hacer en presencia de testigos."
      ],
      answer: "No hay otorgantes, hay requirentes."
    },
    // Pregunta 136
    {
      question:
        "Paco quiere otorgar una Escritura de Compraventa, pero no sabe leer. Juan Notario debe cumplir con el siguiente requisito:",
      options: [
        "Se leerá 1 vez por el Notario.",
        "Se leerá 2 veces, una por el Notario y una por un Testigo.",
        "Se leerá 3 veces, una por el Notario y dos por 3 Testigos.",
        "No se puede otorgar la escritura si Paco no sabe leer."
      ],
      answer: "Se leerá 2 veces, una por el Notario y una por un Testigo."
    },
    // Pregunta 137
    {
      question: "El Protocolo del Notario es:",
      options: [
        "Público y pertenece al Estado.",
        "Secreto y pertenece al Estado.",
        "Secreto y pertenece al Notario.",
        "Público y está bajo la custodia del Notario."
      ],
      answer: "Secreto y pertenece al Estado."
    },
    // Pregunta 138
    {
      question:
        "César Notario autorizó un Testamento Abierto. El Notario tiene:",
      options: [
        "72 horas para notificarlo al Registro de Testamento.",
        "48 horas para notificarlo al Registro de Poderes.",
        "24 horas para notificarlo al Registro de Testamento.",
        "30 días para notificarlo al Registro de Testamento."
      ],
      answer: "24 horas para notificarlo al Registro de Testamento."
    },
    // Pregunta 139
    {
      question:
        "Para que un documento sea público, el Notario debe de cumplir con los siguientes requisitos:",
      options: [
        "La firma, rúbrica, sello y signo",
        "La firma, rúbrica, sello y comprobante",
        "La firma, rúbrica y sello notarial",
        "La firma y sello del cliente"
      ],
      answer: "La firma, rúbrica, sello y signo"
    },
    // Pregunta 140
    {
      question: "¿Cuáles son las características de un Notario?:",
      options: [
        "Parcial, Abogado de una de las partes, representa a su cliente",
        "Imparcial, Neutral, Abogado de una de las partes",
        "Imparcial, no es Abogado de ninguna de las partes, representa la ley para todas las partes",
        "Imparcial, Abogado de ambas partes"
      ],
      answer:
        "Imparcial, no es Abogado de ninguna de las partes, representa la ley para todas las partes"
    },
    // Pregunta 141
    {
      question: "Eric Notario autorizó un Poder. El Notario tiene:",
      options: [
        "72 horas para notificarlo al Registro de Testamento",
        "24 horas para notificarlo al Registro de Testamento",
        "72 horas para notificarlo al Registro de Poderes",
        "48 horas para notificarlo al Registro de Testamento"
      ],
      answer: "72 horas para notificarlo al Registro de Poderes"
    },
    // Pregunta 142
    {
      question: "¿Cuáles son los tipos de sucesión?",
      options: [
        "Testada",
        "Testada e Intestada",
        "Intestada",
        "Testada, Intestada y Abierta"
      ],
      answer: "Testada e Intestada"
    },
    // Pregunta 143
    {
      question:
        "¿Cuál de las siguientes afirmaciones es correcta en caso de que un propietario tenga varios corredores vendiendo su propiedad bajo contratos abiertos, pero luego firme un contrato exclusivo con uno de ellos?",
      options: [
        "El contrato exclusivo prevalecerá sobre los contratos abiertos",
        "Prevalecerán los contratos abiertos",
        "Los contratos abiertos quedarán anulados",
        "El contrato exclusivo no tiene validez"
      ],
      answer: "El contrato exclusivo prevalecerá sobre los contratos abiertos"
    },
    // Pregunta 144
    {
      question: "La escritura de hipoteca:",
      options: [
        "No transfiere titularidad",
        "Transfiere titularidad",
        "Transfiere la hipoteca a otro banco",
        "Convierte la propiedad en bienes muebles"
      ],
      answer: "No transfiere titularidad"
    },
    // Pregunta 145
    {
      question:
        "La Ley 216 de 2010, conocida como Nueva Ley para Agilizar el Registro de la Propiedad dispone:",
      options: [
        "Que se pueden tener derechos reales no inscritos en el Registro de la Propiedad. La inscripción no da ni quita el derecho",
        "Que los documentos presentados en el Registro de la Propiedad queden inscritos, excepto ciertos específicamente que no pueden quedar inscritos",
        "Que todos los documentos deben ser inscritos sin excepción",
        "Que la inscripción es opcional y no afecta los derechos reales"
      ],
      answer:
        "Que los documentos presentados en el Registro de la Propiedad queden inscritos, excepto ciertos específicamente que no pueden quedar inscritos"
    },
    //Pregunta 146
    {
      question: "El Registrador de la Propiedad es nombrado por:",
      options: [
        "El gobernador en el consejo y consentimiento del senado por 12 años.",
        "El gobernador y DACO.",
        "El Presidente del Tribunal Supremo",
        "Los propietarios de las propiedades inscritas"
      ],
      answer:
        "El gobernador en el consejo y consentimiento del senado por 12 años."
    },
    // Pregunta 147
    {
      question: "La Fe Pública Registral significa:",
      options: [
        "Veracidad, Confianza o autoridad legítima en el Registro de la Propiedad que se tiene por auténtica mientras no se pruebe lo contrario",
        "Primero en tiempo, primero en derecho",
        "Fe en los documentos emitidos por el gobierno",
        "Fe en los documentos emitidos por los Notarios"
      ],
      answer:
        "Veracidad, Confianza o autoridad legítima en el Registro de la Propiedad que se tiene por auténtica mientras no se pruebe lo contrario"
    },
    // Pregunta 148
    {
      question:
        "Los documentos que se deben inscribir en el Registro de la Propiedad en una Sucesión Intestada son:",
      options: [
        "Resolución sobre Declaratoria de Herederos, Relevo de Hacienda, Instancia y Aranceles Registrales",
        "Testamento, Relevo, Instancia y Aranceles Registrales",
        "Testamento y Relevo",
        "Declaración de herederos y testamento"
      ],
      answer:
        "Resolución sobre Declaratoria de Herederos, Relevo de Hacienda, Instancia y Aranceles Registrales"
    },
    // Pregunta 149
    {
      question:
        "¿Cuáles de los siguientes no se necesitan inscribir en el Registro de la Propiedad para que sean válidos:",
      options: [
        "Hipoteca, Servidumbre de Equidad, Propiedad Horizontal",
        "Compraventa",
        "Arrendamiento",
        "Testamento"
      ],
      answer: "Compraventa"
    },
    // Pregunta 150
    {
      question: "Para que una hipoteca sea válida hay que hacer:",
      options: [
        "Una escritura privada",
        "Una escritura pública e inscribirlo en el Registro de la Propiedad",
        "Un contrato verbal",
        "Un acuerdo privado"
      ],
      answer:
        "Una escritura pública e inscribirlo en el Registro de la Propiedad"
    },
    // Pregunta 151
    {
      question: "Una propiedad en el Registro de la Propiedad se organiza por:",
      options: ["Finca", "Catastro", "Parcela", "Dirección"],
      answer: "Finca"
    },
    // Pregunta 152
    {
      question: "El Registro de la Propiedad está adscrito al:",
      options: [
        "Departamento de Estado",
        "Departamento de Justicia",
        "Departamento de Hacienda",
        "Departamento de Transportación y Obras Públicas"
      ],
      answer: "Departamento de Justicia"
    },
    // Pregunta 153
    {
      question: "El principio básico del registro es:",
      options: [
        "Mantener un registro de las propiedades",
        "Dar publicidad a las transacciones de bienes raíces",
        "Proteger los derechos de los propietarios",
        "Recopilar información sobre la propiedad"
      ],
      answer: "Dar publicidad a las transacciones de bienes raíces"
    },
    // Pregunta 154
    {
      question: "La Bitácora significa:",
      options: [
        "Documentos pendientes de inscripción",
        "Documentos inscritos en el registro",
        "Registro de transacciones inmobiliarias",
        "Registro de propiedades en venta"
      ],
      answer: "Documentos pendientes de inscripción"
    },
    // Pregunta 155
    {
      question:
        "¿Para qué se inscribe el Contrato de Arrendamiento en el Registro de la Propiedad?",
      options: [
        "Para proteger al Arrendatario",
        "Para que el contrato sea válido",
        "Para que el arrendador pueda vender la propiedad",
        "No es necesario inscribirlo"
      ],
      answer: "Para proteger al Arrendatario"
    },
    // Pregunta 156
    {
      question:
        "El Archivo Público donde se encuentra el estado jurídico de bienes inscritos es:",
      options: [
        "El asiento",
        "El Registro de la Propiedad",
        "La Oficina de Catastro",
        "El Archivo General del Gobierno"
      ],
      answer: "El Registro de la Propiedad"
    },
],

legal2: [    


// Pregunta 157
    {
      question: "La función principal del Registrador es:",
      options: [
        "Autorizar los documentos que se presentan en el registro",
        "Calificar los documentos que se presentan en el registro",
        "Inspeccionar los documentos que se presentan en el registro",
        "Publicar los documentos en el registro"
      ],
      answer: "Calificar los documentos que se presentan en el registro"
    },
    // Pregunta 158
    {
      question:
        "El Principio de 'Primero en tiempo, Primero en Derecho' se conoce como:",
      options: [
        "Tracto Sucesivo",
        "De Inscripción",
        "Prioridad o Rango",
        "Registro de Propiedad"
      ],
      answer: "Prioridad o Rango"
    },
    // Pregunta 159
    {
      question:
        "El Principio donde se garantiza un historial de dueños inscritos anteriores sin saltos y sin interrupción se conoce como:",
      options: [
        "Tracto Sucesivo",
        "Especialidad",
        "Legalidad",
        "Continuidad Registral"
      ],
      answer: "Tracto Sucesivo"
    },
    // Pregunta 160
    {
      question: "El Principio de Legalidad significa:",
      options: [
        "Que todos los documentos a inscribirse en el Registro de la Propiedad deben cumplir con la ley",
        "Que tu propiedad es única y exclusiva en el Registro de la Propiedad",
        "Que la inscripción es voluntaria",
        "Que el Registro de la Propiedad es opcional"
      ],
      answer:
        "Que todos los documentos a inscribirse en el Registro de la Propiedad deben cumplir con la ley"
    },
    // Pregunta 161
    {
      question: "Ejemplos de bienes no inmuebles:",
      options: [
        "Casa y Terreno",
        "Lo que está dentro de un edificio",
        "Terreno y montaña"
      ],
      answer: "Lo que está dentro de un edificio"
    },
    // Pregunta 162
    {
      question: "Hipoteca tácita es:",
      options: [
        "Un impuesto sobre propiedad inmueble",
        "Una exoneración de la propiedad",
        "Un tipo de hipoteca que no requiere escritura pública",
        "Una hipoteca que no está inscrita en el Registro de la Propiedad"
      ],
      answer: "Un impuesto sobre propiedad inmueble"
    },
    // Pregunta 163
    {
      question: "Donación significa:",
      options: [
        "Cuando una persona (Donante) le dona gratuitamente a otra llamada (Donatario) un bien que este acepta",
        "Una compraventa",
        "Un regalo",
        "Un préstamo"
      ],
      answer:
        "Cuando una persona (Donante) le dona gratuitamente a otra llamada (Donatario) un bien que este acepta"
    },
    // Pregunta 164
    {
      question: "En un matrimonio cuando hay sociedad legal de gananciales:",
      options: [
        "No se pueden hacer donaciones, salvo las de regocijo familiar",
        "Se pueden hacer donaciones",
        "Todos los bienes son propiedad del esposo",
        "Los bienes se dividen por igual en caso de divorcio"
      ],
      answer: "Se pueden hacer donaciones"
    },
    // Pregunta 165
    {
      question: "¿Un arrendatario puede subarrendar una propiedad?",
      options: [
        "Sí, siempre y cuando no se prohíba en el contrato",
        "El nuevo Código Civil prohibió el subarrendamiento",
        "Solo si obtiene permiso del propietario",
        "Solo si el subarrendamiento es a familiares"
      ],
      answer: "Sí, siempre y cuando no se prohíba en el contrato"
    },
    // Pregunta 166
    {
      question:
        "La persona que el Testador nombra en el testamento para que se encargue de cumplir con su última voluntad se conoce como:",
      options: ["Apoderado", "Albacea", "Heredero", "Legatario"],
      answer: "Albacea"
    },
    // Pregunta 167
    {
      question:
        "¿El Albacea puede vender una propiedad sin ser Corredor de Bienes Raíces?",
      options: [
        "No puede hacerlo, necesita licencia de Corredor o Vendedor",
        "Puede hacerlo porque las disposiciones de la Ley 10 no le aplican",
        "Solo si tiene permiso del tribunal",
        "Solo si todos los herederos están de acuerdo"
      ],
      answer:
        "Puede hacerlo porque las disposiciones de la Ley 10 no le aplican"
    },
    // Pregunta 168
    {
      question:
        "¿El Albacea puede vender una propiedad sin la firma de los herederos?",
      options: [
        "Sí, si el testamento lo indica",
        "No, todos los herederos tienen que firmar",
        "Solo si el tribunal lo autoriza",
        "Solo si es una propiedad pequeña"
      ],
      answer: "No, todos los herederos tienen que firmar"
    },
    // Pregunta 169
    {
      question:
        "Para hacer una Donación de un bien Inmueble en Puerto Rico requiere:",
      options: [
        "Hacerse en Escritura Pública por Notario, expresar los bienes donados, hacer valor de las cargas y gravámenes, y la aceptación del donatario",
        "Hacerse en Escritura Pública o en declaración jurada, por Notario, expresar los bienes donados, hacer valor de las cargas y gravámenes, y la aceptación del donatario",
        "Hacerse en un contrato privado, sin necesidad de notario",
        "Hacerse en una reunión familiar, sin necesidad de documentos"
      ],
      answer:
        "Hacerse en Escritura Pública por Notario, expresar los bienes donados, hacer valor de las cargas y gravámenes, y la aceptación del donatario"
    },
    // Pregunta 170
    {
      question: "La Sociedad Legal de Gananciales:",
      options: [
        "Tiene personalidad jurídica propia",
        "Rige las ganancias y obligaciones por los cónyuges durante la vigencia del matrimonio",
        "Termina con el divorcio o muerte de uno de los cónyuges",
        "Todas las anteriores"
      ],
      answer: "Todas las anteriores"
    },
    // Pregunta 171
    {
      question: "¿Cuáles son los vicios en el consentimiento de un contrato?:",
      options: [
        "Error, dolo, violencia e intimidación",
        "Error, oculto, evicción e intimidación",
        "Error, oculto, violencia e intimidación",
        "Falta de firma"
      ],
      answer: "Error, dolo, violencia e intimidación"
    },
    // Pregunta 172
    {
      question: "Lo siguiente es un bien inmueble:",
      options: ["Casa, Terreno", "Mueble", "Joyería"],
      answer: "Casa, Terreno"
    },
    // Pregunta 173
    {
      question: "La Donación en Puerto Rico es:",
      options: [
        "Onerosa",
        "Gratuita",
        "Un contrato de compraventa",
        "Un préstamo"
      ],
      answer: "Gratuita"
    },
    // Pregunta 174
    {
      question: "Para la expropiación forzosa se debe cumplir con:",
      options: [
        "Justa Liquidación",
        "Necesidad Pública y Justa Compensación",
        "Consentimiento del propietario",
        "Pago de todos los impuestos"
      ],
      answer: "Justa Liquidación"
    },
    // Pregunta 176
    {
      question:
        "Si se hace un Poder fuera de los Estados Unidos, para que este sea válido en Puerto Rico requiere:",
      options: [
        "Una Apostilla",
        "La Certificación del County Clerk",
        "Un Poder Duradero",
        "La firma del Gobernador"
      ],
      answer: "Una Apostilla"
    },
    // Pregunta 177
    {
      question: "Para hacer un Testamento Abierto se requieren:",
      options: [
        "3 testigos Instrumentales Idóneos",
        "5 testigos Instrumentales",
        "No requiere testigos",
        "Un testigo instrumental y dos testigos ordinarios"
      ],
      answer: "No requiere testigos"
    },
    // Pregunta 178
    {
      question:
        "Las anotaciones de Embargos por contribuciones sobre ingresos prescriben a los:",
      options: [
        "5 años desde su anotación",
        "6 años desde su anotación",
        "10 años desde su anotación de Hacienda",
        "3 años desde su anotación"
      ],
      answer: "6 años desde su anotación"
    },
    // Pregunta 179
    {
      question: "Una Declaratoria de Herederos es:",
      options: [
        "Una acción judicial ex-parte que se usa cuando el causante no dejó testamento donde expresa quienes son los herederos por disposición de ley",
        "Cuando se hace la partición de la herencia",
        "Cuando se vende una propiedad",
        "Cuando se dona una propiedad"
      ],
      answer:
        "Una acción judicial ex-parte que se usa cuando el causante no dejó testamento donde expresa quienes son los herederos por disposición de ley"
    },
    // Pregunta 180
    {
      question: "La Usucapión Ordinaria requiere un término de:",
      options: ["20 años", "10 años", "5 años", "30 años"],
      answer: "10 años"
    },
    // Pregunta 181
    {
      question:
        "Filiberto Testador hizo un Testamento Abierto donde dejó todos sus bienes a su mejor amiga Rosita. En el momento de su fallecimiento, Filiberto no tenía descendientes ni ascendientes, y solo le sobreviven su esposa Jane y su único hermano John. ¿Cuál es el derecho de Jane y John, si corresponde alguno, en relación con la herencia?",
      options: [
        "Jane tiene derecho a la Cuota Viudal Usufructuaria y John tiene derecho a la totalidad de la herencia como hermano de Testador",
        "Ocurre preterición, la esposa hereda la legítima, la amiga hereda en virtud de la libre disposición y el hermano no hereda nada",
        "Ni la amiga Rosita ni el hermano John tienen derecho a nada, todos los bienes corresponden a su esposa Jane",
        "Jane hereda la mitad de la herencia y John la otra mitad."
      ],
      answer:
        "Ocurre preterición, la esposa hereda la legítima, la amiga hereda en virtud de la libre disposición y el hermano no hereda nada"
    },
    // Pregunta 182
    {
      question: "Los Testigos en el Testamento Abierto:",
      options: [
        "Pueden ser empleados o parientes del Notario autorizante",
        "Tienen que ser Corredores de Bienes Raíces",
        "No pueden ser empleados del Notario autorizante ni parientes del Notario o de las partes interesadas",
        "Deben ser familiares del Testador."
      ],
      answer:
        "No pueden ser empleados del Notario autorizante ni parientes del Notario o de las partes interesadas"
    },
    // Pregunta 184
    {
      question:
        "En una sucesión, ¿quién tiene que comparecer a la firma de las escrituras?",
      options: [
        "El albacea",
        "Todos los herederos",
        "El testador",
        "El Registrador de la Propiedad."
      ],
      answer: "Todos los herederos"
    },
    // Pregunta 185
    {
      question: "La Usucapión Extraordinaria requiere un término de:",
      options: ["20 años", "30 años", "10 años", "15 años."],
      answer: "20 años"
    },
    // Pregunta 186
    {
      question:
        "Si una persona de 16 años hace un testamento Ológrafo, el testamento es:",
      options: [
        "Nulo porque requiere 18 años o más",
        "Válido porque requiere 14 años o más",
        "Nulo porque requiere 21 años o más",
        "Válido porque requiere 16 años o más"
      ],
      answer: "Nulo porque requiere 18 años o más"
    },
    // Pregunta 187
    {
      question:
        "La señorita Alegría, hija de Donald, se entregó a la Prostitución. Mediante qué recurso Donald puede sacar de la herencia a su hija:",
      options: [
        "Mediante las Causas de Desheredación",
        "Mediante las Causas de Indignidad",
        "Mediante el recurso de Moralidad",
        "No puede sacarla de la herencia"
      ],
      answer: "Mediante las Causas de Desheredación"
    },
    // Pregunta 188
    {
      question:
        "¿Cuántos testigos instrumentales tienen que comparecer para un testamento abierto?",
      options: [
        "3 testigos Instrumentales",
        "No se requieren testigos instrumentales",
        "1 testigo instrumental y el Notario",
        "5 testigos instrumentales"
      ],
      answer: "No se requieren testigos instrumentales"
    },
    // Pregunta 189
    {
      question: "Causante es lo mismo que:",
      options: ["Muerto", "El heredero", "Un sucesor"],
      answer: "Muerto"
    },
    // Pregunta 190
    {
      question: "El Causante aparece en la planilla de:",
      options: [
        "Caudal Relicto",
        "Propiedad Inmueble",
        "Contribución sobre Ingresos",
        "Activo del Fallecido"
      ],
      answer: "Caudal Relicto"
    },
    // Pregunta 191
    {
      question: "El derecho a edificar sobre el vuelo se conoce como:",
      options: [
        "Sobreelevación",
        "Edificación",
        "Vuelo elevado",
        "Derecho aéreo"
      ],
      answer: "Sobreelevación"
    },
    // Pregunta 192
    {
      question:
        "Donald hizo un Testamento Abierto donde le dejó la legítima larga a sus hijos Hugo y Paco, y la libre disposición a su Amigo. No le dejó nada a su hijo Adoptivo Luis. Al momento de Donald morir no tenía Ascendientes. Luis alega que el Testamento es Nulo y que el Amigo de Donald no puede heredar. Determine si el fundamento de Luis es válido y por qué:",
      options: [
        "El Testamento es válido, Luis hereda por Preterición junto a Hugo y Paco, y el Amigo hereda el tercio de libre disposición",
        "El Testamento es Nulo, Luis hereda por Preterición y el Amigo hereda el tercio de libre disposición",
        "El Testamento es válido, Luis no hereda por Preterición y el Amigo hereda el tercio de libre disposición",
        "El Testamento es Nulo, Luis no hereda por Preterición y el Amigo hereda la totalidad de la herencia"
      ],
      answer:
        "El Testamento es válido, Luis hereda por Preterición junto a Hugo y Paco, y el Amigo hereda el tercio de libre disposición"
    },
    // Pregunta 193
    {
      question: "El Derecho de Uso y Habitación:",
      options: [
        "Puede ser a término",
        "Son derechos personalísimos",
        "Son derechos reales",
        "Todas las anteriores"
      ],
      answer: "Todas las anteriores"
    },
    // Pregunta 194
    {
      question:
        "Un Testador hizo un Testamento Ológrafo en computadora y lo firmó con su puño y letra. Estuvieron presentes con el Testador 5 Testigos Instrumentales. Indique si el Testamento es válido:",
      options: [
        "No es válido porque se necesitan 3 Testigos Instrumentales",
        "Es válido porque se requiere sólo la firma del Testador a mano",
        "No es válido porque no se cumplió con los requisitos de ley",
        "Es válido porque se cumplieron los requisitos de la firma a mano y la presencia de testigos"
      ],
      answer: "No es válido porque no se cumplió con los requisitos de ley"
    },
    // Pregunta 195
    {
      question: "El Testador en un Testamento puede mejorar a:",
      options: [
        "El tercio de mejora ya no existe",
        "Sus hijos y Ascendientes",
        "Ascendientes",
        "Cualquier familiar"
      ],
      answer: "El tercio de mejora ya no existe"
    },
    // Pregunta 196
    {
      question: "A la Sucesión Intestada también se le conoce como:",
      options: [
        "Ab Intestato",
        "Sucesión intestada",
        "Sucesión testamentaria",
        "Herencia sin testamento"
      ],
      answer: "Ab Intestato"
    },
    // Pregunta 197
    {
      question:
        "Mariana se casó con Mariano bajo la Sociedad Legal de Gananciales. Mariana era la que generaba ingresos, mientras Mariano no quería trabajar y se quedaba todo el día en la casa. Al momento de Divorciarse, Mariano solicitó la mitad de todos los bienes. Indique si Mariano tiene razón:",
      options: [
        "Si, porque se presume ganancial todo beneficio o ganancia adquirido durante el matrimonio por cualquiera de los cónyuges",
        "No, porque quien generó los ingresos fue Mariana",
        "No, porque eso se tiene que pactar en las Capitulaciones Matrimoniales",
        "Si, porque el matrimonio es una sociedad de gananciales"
      ],
      answer:
        "Si, porque se presume ganancial todo beneficio o ganancia adquirido durante el matrimonio por cualquiera de los cónyuges"
    },
    // Pregunta 198
    {
      question: "La edad mínima para contratar es a los:",
      options: ["21 años", "18 años", "16 años", "20 años"],
      answer: "21 años"
    },
    // Pregunta 199
    {
      question: "¿Cuál de las siguientes alternativas es un derecho real?",
      options: [
        "La Hipoteca",
        "La acción en daños y perjuicios",
        "Derecho Notarial",
        "Derecho de autor"
      ],
      answer: "La Hipoteca"
    },
    // Pregunta 200
    {
      question:
        "Esposo y Esposa casados con capitulaciones son propietarios de una propiedad conjunta. Sin embargo, Esposo planea vender su porcentaje de participación a su amigo Pepe. ¿Cuál derecho, si alguno, tiene Esposa en esta situación?",
      options: [
        "Derecho de Retracto",
        "Derecho Absoluto",
        "Derecho de Tanteo",
        "Derecho de Adjudicación"
      ],
      answer: "Derecho de Tanteo"
    },
    // Pregunta 201
    {
      question: "Para que sea válido un contrato de Hipoteca se requiere:",
      options: [
        "Escritura Pública y ser inscrito en el Registro de la Propiedad",
        "Escritura Pública y ser inscrito en el Tribunal de Primera Instancia",
        "Escritura Pública y ser inscrito en la Oficina del Comisionado de Instituciones Financieras",
        "Contrato privado"
      ],
      answer: "Escritura Pública y ser inscrito en el Registro de la Propiedad"
    },
    // Pregunta 202
    {
      question:
        "Don Dinero adquirió un préstamo de $10 millones del Banco Dorado para la compra de una propiedad. El Banco hizo la hipoteca en un contrato privado con Don Dinero. Determine si la hipoteca es válida:",
      options: [
        "No, porque la hipoteca requiere hacerse en Escritura Pública e inscribirse en el Registro de la Propiedad, o sea, es de inscripción constitutiva",
        "No, porque la hipoteca requiere hacerse en Escritura Pública",
        "Sí, porque los contratos en Puerto Rico son válidos tanto verbal como escrito",
        "Sí, porque el contrato privado es válido para una hipoteca"
      ],
      answer:
        "No, porque la hipoteca requiere hacerse en Escritura Pública e inscribirse en el Registro de la Propiedad, o sea, es de inscripción constitutiva"
    },
    // Pregunta 203
    {
      question: "Una Servidumbre de Paso se define como:",
      options: [
        "Gravamen impuesto sobre un Inmueble en beneficio de otro perteneciente a distinto dueño",
        "Gravamen impuesto sobre un Inmueble en beneficio de otro Inmueble perteneciente al mismo dueño",
        "Derecho de paso de una propiedad a otra",
        "Un contrato de alquiler"
      ],
      answer:
        "Gravamen impuesto sobre un Inmueble en beneficio de otro perteneciente a distinto dueño"
    },
    // Pregunta 204
    {
      question: "La Servidumbre de Paso se constituye por:",
      options: [
        "Escritura pública",
        "Signo aparente",
        "Simple acuerdo verbal",
        "Prescripción"
      ],
      answer: "Signo aparente"
    },
    {
      question:
        "Paco era consciente de que la finca que estaba ocupando no era de su propiedad, sino de Luis. Sin embargo, Luis estuvo en los Estados Unidos durante 35 años. Paco mantuvo la posesión pública, pacífica e ininterrumpida de la finca durante 20 años, actuando como dueño. Según la legislación vigente, ¿qué tipo de usucapión sería aplicable en esta situación?",
      options: [
        "Ordinaria",
        "Extraordinaria",
        "No aplica usucapión",
        "Usucapión especial"
      ],
      answer: "Extraordinaria"
    },
    // Pregunta 206
    {
      question:
        "Juan Arrendador debe reparar urgentemente el Techo de la cocina de Pedro Arrendatario. La Propiedad arrendada es habitable. La duración de la obra fue de 15 días. Pedro Arrendatario tenía derecho a:",
      options: [
        "Reducción del canon de arrendamiento de forma proporcional al espacio no utilizable durante la realización de la obra.",
        "Reducción del canon de arrendamiento, más compensación en daños y perjuicios.",
        "No tiene derecho a ninguna rebaja en el canon de arrendamiento.",
        "Rescindir el contrato de arrendamiento."
      ],
      answer: "No tiene derecho a ninguna rebaja en el canon de arrendamiento."
    },
],

legal3: [
    // Pregunta 207
    {
      question:
        "Vendedor y Comprador acuerdan en un contrato que la compraventa de un terreno es sujeta a que OGPe apruebe la segregación de esta. Determine qué clase de condición fue impuesta en el contrato de compraventa.",
      options: [
        "Condición Constructiva",
        "Condición Resolutoria",
        "Condición Suspensiva",
        "Condición mixta"
      ],
      answer: "Condición Suspensiva"
    },
    // Pregunta 208
    {
      question:
        "John vive y posee un terreno con conocimiento que no es suyo. Para que John adquiera la propiedad por Usucapión Extraordinaria (Prescripción Adquisitiva) tiene que cumplir con los siguientes requisitos:",
      options: [
        "Mala Fe, falta de justo título, posesión de 20 años en concepto de dueño, pacífica, pública ininterrumpidamente",
        "Buena Fe, falta de justo título, posesión de 10 años entre presentes y 20 años entre ausente posesión en concepto de dueño, pacífica, pública e ininterrumpidamente",
        "Mala Fe, falta de justo título, posesión de 10 años en concepto de dueño, pacífica, pública ininterrumpidamente",
        "Buena Fe, falta de justo título, posesión de 30 años en concepto de dueño, pacífica, pública e ininterrumpidamente"
      ],
      answer:
        "Mala Fe, falta de justo título, posesión de 20 años en concepto de dueño, pacífica, pública ininterrumpidamente"
    },
    // Pregunta 209
    {
      question:
        "Un Contrato que no cumpla con cualquiera de los elementos de consentimiento, objeto o causa es:",
      options: ["Inválido", "Nulo", "Ineficaz", "Inexistente"],
      answer: "Nulo"
    },
    // Pregunta 210
    {
      question: "El Contrato de Promesa de Compraventa es uno:",
      options: [
        "Unilateral y recíproco",
        "Bilateral y genera obligaciones recíprocas",
        "Bilateral y Unilateral",
        "Unilateral"
      ],
      answer: "Bilateral y genera obligaciones recíprocas"
    },
    // Pregunta 211
    {
      question: "El Contrato de Opción es uno:",
      options: ["Bilateral", "Unilateral", "Recíproco", "Aleatorio"],
      answer: "Unilateral"
    },
    // Pregunta 212
    {
      question: "La Servidumbre de Equidad es:",
      options: [
        "Una restricción al uso de Propiedad en una Comunidad",
        "Es cuando existe una pared medianera entre dos propiedades",
        "Es el Predio Sirviente y el Predio Dominante",
        "Un tipo de servidumbre de paso"
      ],
      answer: "Una restricción al uso de Propiedad en una Comunidad"
    },
    // Pregunta 213
    {
      question: "La Servidumbre de Equidad se puede modificar:",
      options: [
        "Por consentimiento unánime de todos los titulares",
        "Por mayoría",
        "Por la Junta de Planificación",
        "No se puede modificar"
      ],
      answer: "Por consentimiento unánime de todos los titulares"
    },
    // Pregunta 214
    {
      question:
        "John Vendedor se encuentra en Canadá, uno de los países dentro del Tratado de la Haya, y quiere vender su casa que se encuentra en Puerto Rico, pero no puede comparecer al cierre de la venta. John otorgó un poder a su hermano ante un Notario en Canadá. Qué se necesita para que el poder sea válido en Puerto Rico.",
      options: [
        "Se va directamente donde un Notario de San Juan para que lo protocolice.",
        "Se debe autenticar la firma del Notario ante el ‘County Clerk' en el Departamento de Estado de Canadá.",
        "Se necesita el documento 'la Apostilla' a base del Tratado de la Haya y protocolizarse en Puerto Rico.",
        "Se debe enviar el poder a través de correo certificado a una notaría en Puerto Rico."
      ],
      answer:
        "Se necesita el documento 'la Apostilla' a base del Tratado de la Haya y protocolizarse en Puerto Rico."
    },
    // Pregunta 215
    {
      question: "Una silla es un bien:",
      options: ["Mueble", "Inmueble", "Común limitado", "Un bien de consumo"],
      answer: "Inmueble"
    },
    // Pregunta 216
    {
      question: "El Derecho de Propiedad:",
      options: [
        "Es Absoluto",
        "No es Absoluto",
        "Depende del estatus registral",
        "Es relativo"
      ],
      answer: "No es Absoluto"
    },
    // Pregunta 217
    {
      question: "Una casa es un bien Inmueble:",
      options: [
        "Por su destino",
        "Por su Naturaleza",
        "Por disposición de ley",
        "Por su ubicación"
      ],
      answer: "Por su Naturaleza"
    },
    // Pregunta 218
    {
      question: "El Derecho de Usufructo es:",
      options: [
        "Uso, goce y disfrute que se le da al Arrendatario",
        "Uso, goce y disfrute que se le da al Superficiario",
        "Uso, goce y disfrute que se le da al Usufructuario",
        "Uso y goce exclusivo de un bien"
      ],
      answer: "Uso, goce y disfrute que se le da al Usufructuario"
    },
    // Pregunta 219
    {
      question:
        "El Banco Dorado acordó en la Escritura de Hipoteca que si Comprador no paga la deuda automáticamente el Banco adquiere la titularidad de la casa. Indique la actuación del Banco:",
      options: [
        "Legal, porque en PR se permite el Pacto Comisorio",
        "Ilegal, porque en PR no se permite el Pacto Comisorio",
        "Legal, porque se expresó en el contrato"
      ],
      answer: "Ilegal, porque en PR no se permite el Pacto Comisorio"
    },
    // Pregunta 220
    {
      question:
        "El libro donde se presentan los documentos para su inscripción en el Registro de la Propiedad se conoce como:",
      options: [
        "Diario de Presentación",
        "Bitácora",
        "Libro de Registro",
        "Libro de Inscripciones"
      ],
      answer: "Diario de Presentación"
    },

    // Pregunta 221
    {
      question:
        "Cuando 2 fincas se unen para formar 1 sola nueva Finca, se conoce como:",
      options: ["Agregación", "Agrupación", "Fusión de fincas", "Subdivisión"],
      answer: "Agrupación"
    },

    // Pregunta 222
    {
      question:
        "El Principio que protege al Tercero Registral que inscribe de buena fe su derecho en Registro se conoce como:",
      options: [
        "Principio de Fe Pública Registral",
        "Principio de Tracto Sucesivo",
        "Principio de Inscripción",
        "Principio de Prioridad"
      ],
      answer: "Principio de Fe Pública Registral"
    },

    // Pregunta 223
    {
      question:
        "Cuando el dueño de una propiedad le vende el vuelo sobre el techo o el suelo a otra persona para construir una edificación se conoce como:",
      options: [
        "Derecho de Usufructo",
        "Derecho de Uso y Habitación",
        "Derecho Real de Superficie"
      ],
      answer: "Derecho Real de Superficie"
    },

    // Pregunta 224
    {
      question: "¿Cuál es un derecho de Inscripción Constitutiva?",
      options: [
        "La Compraventa",
        "El uso",
        "La Hipoteca",
        "Ninguno de los anteriores"
      ],
      answer: "La Hipoteca"
    },

    // Pregunta 225
    {
      question: "La 'Finca' es la unidad básica del sistema registral y es:",
      options: [
        "Urbana, Rústica o Rural y Propiedad Horizontal",
        "Urbana, Rústica y Agrícola",
        "Comercial, Industrial y Residencial",
        "No existe un término específico"
      ],
      answer: "Urbana, Rústica o Rural y Propiedad Horizontal"
    },

    // Pregunta 226
    {
      question:
        "El libro donde finalmente está inscrita la propiedad se llama:",
      options: [
        "Libro de Inscripción",
        "Diario de Presentación",
        "Registro de Propiedades",
        "Libro de Contabilidad"
      ],
      answer: "Libro de Inscripción"
    },

    // Pregunta 227
    {
      question:
        "Para cancelar una Hipoteca en el Registro de la propiedad se necesita:",
      options: [
        "Escritura de Hipoteca",
        "El Pagaré Hipotecario",
        "Escritura Pública de Cancelación más el Pagaré Hipotecario",
        "Un contrato privado entre las partes"
      ],
      answer: "Escritura Pública de Cancelación más el Pagaré Hipotecario"
    },

    // Pregunta 228
    {
      question:
        "Si el Registrador de la Propiedad notifica una falta sobre una Escritura de Compraventa que se presentó en el Registro, en cuánto tiempo se tiene que corregir la falta y qué hay que presentar:",
      options: [
        "30 días, se puede presentar un escrito de enmienda",
        "60 días, se puede presentar un escrito de recalificación",
        "90 días, se puede presentar un escrito de corrección",
        "Depende de la naturaleza de la falta y de la decisión del Registrador"
      ],
      answer: "60 días, se puede presentar un escrito de recalificación"
    },

    // Pregunta 229
    {
      question:
        "El libro donde se detallan las inscripciones que están pendientes de calificar por el Registrador para su inscripción y que no es un libro oficial se conoce como:",
      options: [
        "Diario de Presentación",
        "Bitácora",
        "Libro de Registro",
        "Libro de Inscripción"
      ],
      answer: "Bitácora"
    },

    // Pregunta 230
    {
      question:
        "Un contribuyente que quiere saber cuánto tiene que pagar en contribuciones por su casa fue al Registro de la Propiedad. Indique si puede conseguir dicha información en el Registro de la Propiedad:",
      options: [
        "Sí, porque el Registro informa el estado jurídico de la propiedad",
        "Sí, porque el Registro es Público",
        "No, porque las contribuciones de la propiedad son un gravamen que no surge del Registro",
        "Sí, pero solo si el contribuyente es el propietario registrado"
      ],
      answer:
        "No, porque las contribuciones de la propiedad son un gravamen que no surge del Registro"
    },

    // Pregunta 231
    {
      question:
        "Hugo, Paco y Luis son dueños en común proindiviso de una Propiedad. Para vender la propiedad se necesita el consentimiento de:",
      options: [
        "Uno de ellos",
        "2 de ellos o mayoría",
        "Hugo, Paco y Luis",
        "Ninguno de ellos"
      ],
      answer: "Hugo, Paco y Luis"
    },

    // Pregunta 232
    {
      question: "Un contrato perfeccionado significa:",
      options: [
        "Cuando se entrega la cosa",
        "Acuerdo en el precio y en el objeto",
        "Un contrato perfecto, es decir de buena calidad",
        "Ninguna de las anteriores"
      ],
      answer: "Acuerdo en el precio y en el objeto"
    },

    // Pregunta 233
    {
      question: "La persona que tiene título sobre su propiedad tiene:",
      options: [
        "Derecho pleno",
        "Derecho absoluto",
        "Derecho limitado",
        "Ninguna de las anteriores"
      ],
      answer: "Derecho pleno"
    },

    // Pregunta 234
    {
      question:
        "Para que un contrato sea válido debe de cumplir con los siguientes elementos:",
      options: [
        "Consentimiento, objeto y causa",
        "Consentimiento, objeto y cosa",
        "Objeto, precio y forma",
        "Ninguna de las anteriores"
      ],
      answer: "Consentimiento, objeto y causa"
    },

    // Pregunta 235
    {
      question:
        "El Principio que dice 'primero en tiempo, primero en derecho' se conoce como:",
      options: [
        "Principio de Prioridad o Rango",
        "Principio de Legalidad",
        "Principio de Temporalidad",
        "Principio de Igualdad"
      ],
      answer: "Principio de Prioridad o Rango"
    },

    // Pregunta 236
    {
      question: "Según el Código Civil, el matrimonio es:",
      options: [
        "Una Institución Civil que precede de un Contrato Civil",
        "Una Institución Administrativa",
        "Sagrado",
        "Un Contrato Comercial"
      ],
      answer: "Una Institución Civil que precede de un Contrato Civil"
    },

    // Pregunta 237
    {
      question:
        "Esposo hizo Capitulaciones Matrimoniales previo a su matrimonio. Esposo podrá:",
      options: [
        "Comprar y Vender sin el consentimiento de su Esposa",
        "Ceder sus propiedades sin su Esposa",
        "Donar una propiedad a su Esposa",
        "Todas las anteriores"
      ],
      answer: "Todas las anteriores"
    },

    // Pregunta 238
    {
      question:
        "Mariano y Mariana se casaron bajo el régimen de Sociedad Legal de Gananciales en el 2010. Mariana recibió 10 millones de dólares como compensación en daños y perjuicios por un accidente que tuvo en el 2006. Mariano y Mariana se divorciaron y ahora Mariano está solicitando la mitad de los 10 millones de dólares. Indique si Mariano tiene razón y por qué:",
      options: [
        "Sí, tiene razón porque ese dinero es un bien ganancial",
        "No tiene razón, porque ese dinero es un bien privativo de Mariana",
        "Sí, tiene razón porque Mariana lo recibió durante el matrimonio"
      ],
      answer:
        "No tiene razón, porque ese dinero es un bien privativo de Mariana"
    },

    // Pregunta 239
    {
      question:
        "Antes de que se modificaran las Capitulaciones Matrimoniales en el Código Civil, una pareja se casó con Capitulaciones. Durante el matrimonio, los cónyuges decidieron modificar las capitulaciones matrimoniales y para ello fueron al Tribunal. ¿Podrán hacer la modificación de las capitulaciones?",
      options: [
        "Sí, porque las capitulaciones se pueden modificar con autorización del Tribunal",
        "Sí, porque las capitulaciones se hicieron antes del matrimonio",
        "No, porque una vez te casas, las capitulaciones no se pueden modificar ni por el Tribunal",
        "No, porque las capitulaciones matrimoniales pueden ser modificadas"
      ],
      answer:
        "No, porque una vez te casas, las capitulaciones no se pueden modificar ni por el Tribunal"
    },

    // Pregunta 240
    {
      question:
        "Paco, de 17 años, se enamoró de María y contrajo matrimonio al otro día. Paco quiere comprarle una casita a su amada María. ¿Qué necesita Paco para poder solicitar el préstamo?",
      options: [
        "El consentimiento de sus Padres ya que la emancipación por matrimonio fue menos plena",
        "No necesita el consentimiento de sus Padres ya que la emancipación fue Plena",
        "No necesita el consentimiento de nadie",
        "Necesita la autorización del Tribunal"
      ],
      answer:
        "El consentimiento de sus Padres ya que la emancipación por matrimonio fue menos plena"
    },

    //Pregunta 241
    {
      question: "Principio de Tracto Sucesivo significa:",
      options: [
        "Que el registro garantiza una cadena de dueños de la propiedad sin saltos ni interrupción",
        "Primero en tiempo Primero en derecho",
        "Que el registro solo incluye propiedades sucesivas",
        "Que el registro solo se actualiza cada cierto tiempo"
      ],
      answer:
        "Que el registro garantiza una cadena de dueños de la propiedad sin saltos ni interrupción"
    },

    //Pregunta 242
    {
      question:
        "Arrendador y Arrendatario firmaron un contrato de arrendamiento de una propiedad por un período de 6 años, acordando un monto mensual de $500. En el contrato no se incluyó una cláusula que prohíba el subarrendamiento. Posteriormente, el Arrendatario subarrendó la propiedad a su amigo por $1,000. Según la situación descrita, evalúe la actuación del Arrendatario.",
      options: [
        "Legal, porque en el Contrato el Arrendador no se le prohibió al Arrendatario subarrendar",
        "Ilegal, porque el contrato fue entre Arrendador y Arrendatario",
        "Ilegal, porque el canon de arrendamiento fue de $500 y no $1,000"
      ],
      answer:
        "Legal, porque en el Contrato el Arrendador no se le prohibió al Arrendatario subarrendar"
    },

    //Pregunta 243
    {
      question: "Indique cuál de las siguientes afirmaciones es verdadera:",
      options: [
        "Los Cónyuges no se pueden donar bienes entre sí, salvo donaciones módicas de regocijo familiar",
        "Los Cónyuges durante el matrimonio no se puede vender bienes recíprocamente, solo cuando se hayan previamente pactado Capitulaciones Matrimoniales",
        "Para Vender un bien ganancial se necesita el consentimiento de ambos cónyuges",
        "Todas las anteriores"
      ],
      answer:
        "Para Vender un bien ganancial se necesita el consentimiento de ambos cónyuges"
    },

    //Pregunta 244
    {
      question:
        "María está casada bajo el régimen de Sociedad Legal de Gananciales. Utilizando dinero de privativo compró una casa. Sin embargo, su esposo alega que la casa es un bien ganancial. Evalúe si la alegación del esposo es legal en esta situación.",
      options: [
        "Sí, porque María compró la casa durante el Matrimonio",
        "No, porque es privativo todo lo adquirido durante el matrimonio con dinero o bienes privativos",
        "Si, porque están casados bajo la Sociedad Legal de Gananciales",
        "No, porque el dinero utilizado era de María antes del matrimonio"
      ],
      answer:
        "No, porque es privativo todo lo adquirido durante el matrimonio con dinero o bienes privativos"
    },

    //Pregunta 245
    {
      question:
        "El derecho de uso goce y disfrute que tiene alguien sobre la propiedad de otro es:",
      options: [
        "Usufructo",
        "Uso y habitación",
        "Servidumbre",
        "Propiedad compartida"
      ],
      answer: "Usufructo"
    },

    //Pregunta 246
    {
      question: "Las capitulaciones matrimoniales se hacen:",
      options: [
        "Antes o durante el matrimonio",
        "Antes de casarse y en escritura pública. No se pueden modificar nunca",
        "Durante el matrimonio",
        "Después de divorciarse"
      ],
      answer: "Antes o durante el matrimonio"
    },

    //Pregunta 247
    {
      question:
        "Para buscar una propiedad en el Registro de la Propiedad se necesita:",
      options: [
        "Finca, tomo, folio y municipio",
        "Finca y catastro",
        "Finca, parcela y código postal",
        "Dirección y nombre del propietario"
      ],
      answer: "Finca, tomo, folio y municipio"
    },

    //Pregunta 248
    {
      question: "El principio de Primero en tiempo Primero en derecho es:",
      options: [
        "Principio de Prioridad o Rango",
        "Principio de Inscripción",
        "Principio de Igualdad",
        "Principio de Continuidad"
      ],
      answer: "Principio de Prioridad o Rango"
    },

    //Pregunta 249
    {
      question: "Todo contrato debe tener los siguientes requisitos:",
      options: [
        "Consejo, consentimiento y oneroso",
        "Consentimiento, Objeto y Causa",
        "Escritura pública, objeto y precio",
        "Consentimiento, objeto y forma"
      ],
      answer: "Consentimiento, Objeto y Causa"
    },

    //Pregunta 250
    {
      question: "La servidumbre de equidad es:",
      options: [
        "Condición restrictiva al uso y goce de la propiedad",
        "Es el derecho de paso",
        "Un acuerdo entre vecinos",
        "Un principio legal"
      ],
      answer: "Condición restrictiva al uso y goce de la propiedad"
    },

    //Pregunta 251
    {
      question: "Para modificar la servidumbre de equidad se necesita:",
      options: [
        "Unanimidad",
        "Mayoría",
        "Consentimiento del propietario servidumbre",
        "Autorización del gobierno"
      ],
      answer: "Unanimidad"
    },

    //Pregunta 252
    {
      question: "Es una característica del testamento ológrafo:",
      options: [
        "Puede ser en computadora y firmado a mano",
        "Todo hecho a puño y letra",
        "Puede ser dictado a un abogado",
        "Debe ser escrito por un notario público"
      ],
      answer: "Todo hecho a puño y letra"
    },

    //Pregunta 253
    {
      question:
        "Paco y Luis son codeudores de una hipoteca. Si Banco va contra Paco por totalidad de la deuda, este puede ir contra Luis para cobrar la mitad de lo que pagó:",
      options: [
        "Correcto",
        "Incorrecto",
        "Depende de las capitulaciones matrimoniales",
        "Depende del contrato de hipoteca"
      ],
      answer: "Correcto"
    },

    //Pregunta 254
    {
      question: "¿A quién se le paga una obligación?",
      options: [
        "Al deudor que está inscrito para recibir el pago de la deuda solamente",
        "Al deudor que está inscrito, pero se puede transferir con autorización",
        "Al acreedor o al que se autorizó para recibirlo",
        "Al testigo"
      ],
      answer: "Al acreedor o al que se autorizó para recibirlo"
    },

    //Pregunta 255
    {
      question: "El Principio de Legalidad significa:",
      options: [
        "Todo lo que se presente e inscriba en el registro de la propiedad debe cumplir con la ley",
        "Debe haber una cadena de dueño",
        "El registro solo se aplica a propiedades legales",
        "El registro no es obligatorio"
      ],
      answer:
        "Todo lo que se presente e inscriba en el registro de la propiedad debe cumplir con la ley"
    },

    //Pregunta 256
    {
      question: "¿Cuántos tipos de usucapión hay?",
      options: ["2", "3", "4", "5"],
      answer: "2"
    },
    //Pregunta 257
    {
      question:
        "El contrato entre el dueño y el corredor de Bienes Raíces se conoce como:",
      options: [
        "Contrato de opción",
        "Contrato de Corretaje",
        "Contrato de Venta",
        "Contrato de Compra"
      ],
      answer: "Contrato de Corretaje"
    },

    //Pregunta 258
    {
      question: "En cuanto a los contratos:",
      options: [
        "No tienen fuerza de ley entre las partes",
        "Las cláusulas y condiciones de un contrato tienen que ser conforme a la ley, la moral y el orden público",
        "No es necesario que tengan consentimiento, objeto ni causa para que sean válidos",
        "Todas las anteriores"
      ],
      answer:
        "Las cláusulas y condiciones de un contrato tienen que ser conforme a la ley, la moral y el orden público"
    },
    //Pregunta 259
    {
      question: "Las obligaciones pueden consistir en:",
      options: [
        "Dar una cosa",
        "Hacer una cosa",
        "No hacer alguna cosa",
        "Todas las anteriores"
      ],
      answer: "Todas las anteriores"
    },

    //Pregunta 260
    {
      question:
        "La Ley 131 del año 2009 dispone en cuanto a las donaciones en el matrimonio:",
      options: [
        "En el matrimonio no puede haber donaciones entre ambos cónyuges",
        "En un matrimonio solamente se pueden hacer donaciones entre los cónyuges si son regalos módicos, ningún otro tipo de donación es permitida",
        "Esta ley fue enmendada en el nuevo código civil permitiendo cualquier tipo de donación entre los cónyuges.",
        "Siempre puede haber donaciones entre cónyuges sin ningún tipo de impedimento"
      ],
      answer:
        "Esta ley fue enmendada en el nuevo código civil permitiendo cualquier tipo de donación entre los cónyuges."
    },

    //Pregunta 261
    {
      question: "Los bienes inmuebles están sujetos a la ley de:",
      options: [
        "Del país de origen del propietario",
        "Del País en que están sitos",
        "Según lo estipule el Tribunal Supremo",
        "Todas las anteriores"
      ],
      answer: "Del País en que están sitos"
    }
  ],
  matematica: [
    // Pregunta 262
    {
      question: "¿Cuántos acres hay en 20,000 metros cuadrados?",
      options: ["5 acres", "19 acres", "2.471 acres", "4.942 acres"],
      answer: "5 acres"
    },

    // Pregunta 263
    {
      question:
        "¿Cuál es el área de un terreno de 20 metros de ancho por 30 metros de largo?",
      options: [
        "600 metros cuadrados",
        "600 pies cuadrados",
        "200 metros cuadrados",
        "200 pies cuadrados"
      ],
      answer: "600 metros cuadrados"
    },

    // Pregunta 264
    {
      question: "¿Cuántos metros cuadrados tiene un terreno de 60' x 50'?",
      options: ["3,000 m/c", "278.70912 m/c", "500 m/c", "100,000 m/c"],
      answer: "278.70912 m/c"
    },

    // Pregunta 266
    {
      question:
        "Paco Corredor vendió una Supermanzana de la Urbanización “Mi Nueva Casita”. Cada vivienda se vendió a $150,000 al 2.5% de comisión. ¿Cuánto será la comisión total del Corredor?",
      options: ["2,000,000", "2,625,000", "5,000,000", "3,000,000"],
      answer: "2,625,000"
    },

    // Pregunta 267
    {
      question: "¿Cuántos metros cuadrados hay en 5 cuerdas de terreno?",
      options: ["786.07912", "19,652", "20,000", "39,302.396"],
      answer: "19,652"
    },

    // Pregunta 268
    {
      question: "¿Cuánto es un metro cuadrado en pies?",
      options: ["10.001", "10.987", "10.764", "11.014"],
      answer: "10.764"
    },

    // Pregunta 269
    {
      question:
        "José tiene un solar de 50 metros de largo por 35 metros de ancho en un distrito comercial. Obtiene un permiso para construir un edificio que sólo ocupe el 60% del solar, el 10% para áreas verdes y el restante 30% para estacionamientos. ¿Cuántos pies cuadrados tendría el Edificio, las áreas verdes y el estacionamiento?",
      options: [
        "Estructura (11,302.2 p2), Áreas Verdes (1,883.7 p2) y Estacionamiento (5,651.1 p2)",
        "Estructura (1,050 p2), Áreas Verdes (175 p2) y Estacionamiento (525 p2)",
        "Estructura (11,302.2 p2), Áreas Verdes (1,883.7 p2) y Estacionamiento (5,651.1 p2)"
      ],
      answer:
        "Estructura (11,302.2 p2), Áreas Verdes (1,883.7 p2) y Estacionamiento (5,651.1 p2)"
    },

    // Pregunta 270
    {
      question: "¿Cuál de las siguientes afirmaciones es cierta?",
      options: [
        "Los bienes muebles se refieren a aquellos que no pueden ser movidos de un lugar a otro.",
        "Los bienes inmuebles se refieren a aquellos que pueden ser movidos de un lugar a otro.",
        "Los bienes muebles son aquellos que no están ligados a un lugar fijo y pueden ser trasladados.",
        "Los bienes inmuebles son aquellos que están ligados a un lugar fijo y no pueden ser trasladados."
      ],
      answer:
        "Los bienes muebles son aquellos que no están ligados a un lugar fijo y pueden ser trasladados."
    },

    // Pregunta 271
    {
      question:
        "El corredor que trabaja por servicios profesionales debe de pagar por seguro social:",
      options: ["10%", "15.3%", "5%", "20%"],
      answer: "15.3%"
    }
  ],

  tasacion: [
    //Pregunta 272
    {
      question: "La tasación es:",
      options: [
        "Una opinión de precio",
        "Un estimado de valor",
        "Una opinión de valor",
        "Una opinión de valor de un estimado de valor"
      ],
      answer: "Una opinión de valor"
    },

    //Pregunta 273
    {
      question: "¿Qué es lo que afecta el Mercado en Bienes Raíces?",
      options: [
        "Los ciclos económicos",
        "Oferta y Demanda",
        "Política monetaria",
        "Impuestos"
      ],
      answer: "Oferta y Demanda"
    },

    //Pregunta 274
    {
      question: "¿Qué asegura una tasación?",
      options: [
        "Asegura el valor y condición de la propiedad",
        "Asegura a que el comprador pague un precio justo por la casa",
        "Asegura a que el prestamista no enfrente una pérdida total si el propietario de la casa no paga el préstamo",
        "Asegura que la propiedad se mantendrá en buen estado"
      ],
      answer:
        "Asegura a que el prestamista no enfrente una pérdida total si el propietario de la casa no paga el préstamo"
    },

    //Pregunta 275
    {
      question: "¿Qué es valor de mercado (market value)?",
      options: [
        "El valor de mercado es el precio más probable que una propiedad debería alcanzar en un mercado competitivo y abierto, bajo todas las condiciones necesarias para una venta justa en la que tanto el comprador como el vendedor actúen de manera prudente, con conocimiento y asumiendo que el precio no está influenciado por estímulos indebidos.",
        "El valor de mercado es el valor de un mercado específico, establecido por una entidad reguladora y no puede variar en función de las condiciones económicas o la oferta y la demanda.",
        "El valor de mercado es determinado únicamente por el vendedor de la propiedad y no está sujeto a influencias externas como la oferta y la demanda o las condiciones económicas.",
        "El valor de mercado es el precio máximo que un comprador está dispuesto a pagar por una propiedad."
      ],
      answer:
        "El valor de mercado es el precio más probable que una propiedad debería alcanzar en un mercado competitivo y abierto, bajo todas las condiciones necesarias para una venta justa en la que tanto el comprador como el vendedor actúen de manera prudente, con conocimiento y asumiendo que el precio no está influenciado por estímulos indebidos."
    },

    //Pregunta 276
    {
      question: "¿Cuántos enfoques de valoración hay?",
      options: ["3", "2", "4", "5"],
      answer: "3"
    },

    //Pregunta 277
    {
      question: "¿Cuáles son los enfoques de valoración?",
      options: [
        "Capitalización de Ingreso, ventas comparables y costo",
        "Capitalización de Ingreso, propiedades en venta y renta",
        "Capitalización de Ingreso, ventas comparables, costo y tasación",
        "Valor histórico, valor proyectado y valor de mercado"
      ],
      answer: "Capitalización de Ingreso, ventas comparables y costo"
    },

    //Pregunta 278
    {
      question: "Una obsolescencia funcional de una propiedad puede ser:",
      options: [
        "Tren detrás de la casa",
        "Fachada",
        "Diseño obsoleto",
        "Ventanas nuevas"
      ],
      answer: "Fachada"
    },

    //Pregunta 279
    {
      question:
        "El documento o plano preparado por un Agrimensor que presenta las medidas o colindancias de un Predio se llama:",
      options: [
        "Mensura (Plot Plan)",
        "Agrimensura",
        "Tasación para propósitos contributivos",
        "Certificado de propiedad"
      ],
      answer: "Mensura (Plot Plan)"
    },

    //Pregunta 280
    {
      question: "El Cul-de-sac es:",
      options: [
        "Calle con salida",
        "Calle sin salida",
        "Una rotonda",
        "Un callejón"
      ],
      answer: "Calle sin salida"
    },
    //Pregunta 281
    {
      question:
        "Una planta de tratamiento de aguas negras cerca de una propiedad puede ser:",
      options: [
        "Una Obsolescencia Funcional",
        "Una Obsolescencia Externa",
        "Una obsolescencia natural",
        "Una mejora en la calidad de vida"
      ],
      answer: "Una Obsolescencia Externa"
    },

    //Pregunta 282
    {
      question:
        "Si un Tasador va a hacer una evaluación de un Centro Comercial, el enfoque más apropiado a utilizar sería el de:",
      options: [
        "Ventas Comparables",
        "Ingreso por renta",
        "Costo de reposición",
        "Valor histórico"
      ],
      answer: "Ingreso por renta"
    },
    //Pregunta 284
    {
      question:
        "Si el Ingreso Neto Operacional (NOI) es de $20,000 y el precio de Venta es de $250,000 ¿Cuánto es la Tasa de Capitalización?",
      options: ["0.08%", "0.80%", "8%", "80%"],
      answer: "8%"
    },

    //Pregunta 285
    {
      question:
        "En un mercado inmobiliario, en un momento determinado hubo 10 viviendas en venta de las cuales se vendieron 5 de ellas. ¿Cuál es la tasa de absorción de este mercado?",
      options: ["0.20 meses", "0.50 meses", "2 meses", "0.10 meses"],
      answer: "2 meses"
    },

    //Pregunta 286
    {
      question:
        "El “Truth in Lending Act” (TILA) requiere que el Banco divulgue:",
      options: [
        "Total de pagos y el APR, penalidad por prepago, si la hipoteca es asumible y cargos por demora",
        "Total de pagos y el APR, si la hipoteca es asumible, cargos por demora y tabla de amortización",
        "Total de pagos y el monto del préstamo, cargos por demora y tabla de amortización",
        "Total de pagos y el APR, penalidad por prepago y el monto del préstamo"
      ],
      answer:
        "Total de pagos y el APR, penalidad por prepago, si la hipoteca es asumible y cargos por demora"
    }
  ],
  financiamiento: [
    //Pregunta 287
    {
      question:
        "El “Truth in Lending Act” (TILA) requiere que el Banco divulgue:",
      options: [
        "Total de pagos y el APR, penalidad por prepago, si la hipoteca es asumible y cargos por demora",
        "Total de pagos y el APR, si la hipoteca es asumible, cargos por demora y tabla de amortización",
        "Total de pagos y el monto del préstamo, cargos por demora y tabla de amortización",
        "Total de pagos y el APR, penalidad por prepago y el monto del préstamo"
      ],
      answer:
        "Total de pagos y el APR, penalidad por prepago, si la hipoteca es asumible y cargos por demora"
    },

    //Pregunta 288
    {
      question:
        "El “Closing Disclosure” o Divulgación de Cierre, es el documento que ofrece la institución hipotecaria varios días antes del cierre. En este documento se detallan los cargos y costos de la transacción del préstamo. ¿A cuál documento sustituyó el “Closing Disclosure”?",
      options: [
        "Sustituyó el Estimado de Préstamo o “Loan Estimate”",
        "Sustituyó la Declaración de Cierre (HUD-1) o “Settlement Statement”",
        "Sustituyó el contrato de compra-venta",
        "Sustituyó el acta de cierre"
      ],
      answer:
        "Sustituyó la Declaración de Cierre (HUD-1) o “Settlement Statement”"
    },

    // Pregunta 287
    {
      question:
        "El “Truth in Lending Act” (TILA) requiere que el Banco divulgue:",
      options: [
        "Total de pagos y el APR, penalidad por prepago, si la hipoteca es asumible y cargos por demora",
        "Total de pagos y el APR, si la hipoteca es asumible, cargos por demora y tabla de amortización",
        "Total de pagos y el monto del préstamo, cargos por demora y tabla de amortización",
        "Total de pagos y el APR, penalidad por prepago y el monto del préstamo"
      ],
      answer:
        "Total de pagos y el APR, penalidad por prepago, si la hipoteca es asumible y cargos por demora"
    },

    // Pregunta 288
    {
      question:
        "El “Closing Disclosure” o Divulgación de Cierre, es el documento que ofrece la institución hipotecaria varios días antes del cierre. En este documento se detallan los cargos y costos de la transacción del préstamo. ¿A cuál documento sustituyó el “Closing Disclosure”?",
      options: [
        "Sustituyó el Estimado de Préstamo o “Loan Estimate”",
        "Sustituyó la Declaración de Cierre (HUD-1) o “Settlement Statement”",
        "Sustituyó el contrato de compra-venta",
        "Sustituyó el acta de cierre"
      ],
      answer:
        "Sustituyó la Declaración de Cierre (HUD-1) o “Settlement Statement”"
    },

    // Pregunta 289
    {
      question: "A TILA se le conoce como la reglamentación:",
      options: ["X", "Y", "Z", "A"],
      answer: "Z"
    },

    // Pregunta 290
    {
      question: "A RESPA se le conoce como la reglamentación:",
      options: ["X", "Y", "Z", "B"],
      answer: "X"
    },

    // Pregunta 291
    {
      question: "¿Qué reglamento prohíbe el Kickback?",
      options: ["Reglamento X", "Reglamento Y", "Reglamento Z", "Reglamento K"],
      answer: "Reglamento X"
    },

    // Pregunta 292
    {
      question:
        "RESPA dispone que hay que proveerle al cliente el “Closing Disclosure” (antes, settlement statement):",
      options: [
        "72 horas antes del cierre",
        "24 horas antes del cierre",
        "48 horas antes del cierre",
        "7 días antes del cierre"
      ],
      answer: "72 horas antes del cierre"
    },

    // Pregunta 293
    {
      question: "A la “Reglamentación B” se le conoce como:",
      options: [
        "ECOA - Equal Credit Opportunity Act",
        "RESPA – Real Estate Settlement Procedures Act",
        "TILA – Truth In Lending Act",
        "HOLA - Home Ownership and Loan Protection Act"
      ],
      answer: "ECOA - Equal Credit Opportunity Act"
    },

    // Pregunta 294
    {
      question: "Las iniciales VA significan:",
      options: [
        "Veteran Affairs",
        "Veteran Administration",
        "Veterans Association",
        "Veteran Agency"
      ],
      answer: "Veteran Affairs"
    },

    // Pregunta 295
    {
      question: "Farmer Home aplica a:",
      options: [
        "Vivienda en Comercios y Cooperativas",
        "Vivienda de Agricultores (Programa de préstamos para la vivienda en zona rural)",
        "Vivienda en áreas urbanas",
        "Vivienda en la playa"
      ],
      answer:
        "Vivienda de Agricultores (Programa de préstamos para la vivienda en zona rural)"
    },

    // Pregunta 296
    {
      question: "Loan To Value (LTV):",
      options: [
        "El LTV es el valor de mercado de una propiedad luego de descontada la depreciación",
        "El LTV es la relación entre el monto de un préstamo hipotecario y el valor total de la propiedad expresado en porciento",
        "El LTV es la tasa de interés aplicada al préstamo hipotecario",
        "El LTV es el valor de mercado de una propiedad antes de la depreciación"
      ],
      answer:
        "El LTV es la relación entre el monto de un préstamo hipotecario y el valor total de la propiedad expresado en porciento"
    },
    // Pregunta 297
    {
      question:
        "El valor nominal del certificado de elegibilidad en veterano es de:",
      options: ["40,000", "36,000", "25,000", "30,000"],
      answer: "36,000"
    },

    // Pregunta 298
    {
      question: "El MIP es el seguro hipotecario utilizado en:",
      options: [
        "Préstamos Convencionales",
        "Préstamos FHA",
        "Préstamos por VA",
        "Préstamos USDA"
      ],
      answer: "Préstamos FHA"
    },

    // Pregunta 299
    {
      question: "El Seguro Hazard es un seguro contra:",
      options: [
        "Huracán, Fuego, Terremoto e Inundaciones",
        "Huracán, Fuego e Inundaciones",
        "Huracán, Fuego y Terremoto",
        "Inundaciones, Tornados y Terremotos"
      ],
      answer: "Huracán, Fuego y Terremoto"
    },

    // Pregunta 300
    {
      question: "¿Cómo se determina el “Loan to Value”?",
      options: [
        "Dividiendo el préstamo hipotecario entre el precio de venta o tasación (lo que sea menor entre ambos)",
        "Dividiendo el préstamo hipotecario entre el precio de venta o tasación (lo que sea mayor entre ambos)",
        "Sumando el préstamo hipotecario al precio de venta o tasación",
        "Restando el préstamo hipotecario al precio de venta o tasación"
      ],
      answer:
        "Dividiendo el préstamo hipotecario entre el precio de venta o tasación (lo que sea menor entre ambos)"
    },

    // Pregunta 301
    {
      question: "Equidad (“equity”) significa:",
      options: [
        "Participación, interés o valor neto en el mercado que le corresponde al propietario descontando gravámenes que le afecten",
        "Es una restricción al uso de propiedad en una comunidad. Cada propiedad en una comunidad puede tener diferentes restricciones, como el uso, tamaño, etc.",
        "Es la diferencia entre el valor de mercado y el valor de tasación de una propiedad",
        "Es la cantidad de dinero que el propietario debe al banco"
      ],
      answer:
        "Participación, interés o valor neto en el mercado que le corresponde al propietario descontando gravámenes que le afecten"
    },

    // Pregunta 302
    {
      question: "¿Quién aprueba segundas hipotecas?",
      options: [
        "FHA",
        "Préstamo convencional",
        "No existen segundas hipotecas",
        "VA"
      ],
      answer: "Préstamo convencional"
    },

    // Pregunta 303
    {
      question: "¿Dónde se consiguen los fondos para el financiamiento?",
      options: [
        "Mercado primario",
        "Mercado secundario",
        "Mercado terciario",
        "Mercado cuaternario"
      ],
      answer: "Mercado primario"
    },

    // Pregunta 304
    {
      question: "FHA es una Agencia Federal que:",
      options: [
        "Asegura las Hipotecas",
        "Garantiza las Hipotecas",
        "Ni Asegura, ni garantiza",
        "Subsidia las Hipotecas"
      ],
      answer: "Asegura las Hipotecas"
    },

    // Pregunta 305
    {
      question:
        "El propósito del programa de la Sección 203(h) permite que la Administración Federal de Vivienda (FHA) es:",
      options: [
        "Proveer alternativas de financiamiento hipotecario cuando la propiedad necesite reparaciones",
        "Proporcionar un seguro hipotecario para que una persona compre o refinancie una residencia principal",
        "Asegurar hipotecas hechas por prestamistas calificados a víctimas de un desastre mayor que han perdido sus hogares y están en proceso de reconstruir o comprar otra casa.",
        "Ofrecer préstamos a bajo interés para veteranos de guerra"
      ],
      answer:
        "Asegurar hipotecas hechas por prestamistas calificados a víctimas de un desastre mayor que han perdido sus hogares y están en proceso de reconstruir o comprar otra casa."
    },

    // Pregunta 306
    {
      question:
        "En un préstamo FHA en un condominio se incluirá una partida de fondo de reserva que no será menor de:",
      options: [
        "5% del presupuesto del condominio",
        "10% del presupuesto del condominio",
        "15% del presupuesto del condominio",
        "20% del presupuesto del condominio"
      ],
      answer: "10% del presupuesto del condominio"
    },

    // Pregunta 307
    {
      question: "Las siglas GNMA significan:",
      options: [
        "Government National Mortgage Administration",
        "Government National Mortgage Association",
        "Government National Mortgage Agency",
        "Government National Mortgage Authority"
      ],
      answer: "Government National Mortgage Association"
    },

    // Pregunta 308
    {
      question: "¿Qué tipos de hipotecas compra FNMA (Fannie Mae)?",
      options: [
        "Hipotecas convencionales “non conforming”",
        "Hipotecas convencionales “conforming”",
        "Cualquier tipo de Hipoteca",
        "Hipotecas FHA solamente"
      ],
      answer: "Hipotecas convencionales “conforming”"
    },

    // Pregunta 309
    {
      question: "El Seguro PMI, ¿de qué tipo de préstamo es?",
      options: ["FHA", "Convencional", "USDA", "VA"],
      answer: "Convencional"
    },

    // Pregunta 310
    {
      question:
        "En un financiamiento FHA de una unidad de apartamento, ¿qué debe incluir en su pago hipotecario mensual?",
      options: [
        "P&I, MIP, MMIP y cuota de control de acceso",
        "P&I, MIP y seguro de riesgos",
        "P&I, MIP, MMIP y seguro de riesgos",
        "P&I solamente"
      ],
      answer: "P&I, MIP, MMIP y seguro de riesgos"
    },

    // Pregunta 311
    {
      question: "Un préstamo FHA permite:",
      options: [
        "Comprar, reparar y/o refinanciar",
        "Comprar propiedades de inversión",
        "Comprar propiedades comerciales",
        "Comprar terrenos sin construir"
      ],
      answer: "Comprar, reparar y/o refinanciar"
    },

    // Pregunta 312
    {
      question: "Cuáles de los siguientes son gastos prepagados:",
      options: [
        "Intereses, seguros y contribuciones",
        "Plot plan, informe de crédito, tasación y estudio de título",
        "Comisión del corredor, gastos legales y tasa de transferencia",
        "Gastos de mudanza, mobiliario nuevo y decoración"
      ],
      answer: "Intereses, seguros y contribuciones"
    },

    // Pregunta 313
    {
      question: "Al “plot plan” se le conoce como:",
      options: [
        "Mensura",
        "Tasación",
        "Documento de título",
        "Documento de cierre"
      ],
      answer: "Mensura"
    },

    // Pregunta 314
    {
      question:
        "El préstamo convencional que financia hasta $1,000,000 se le conoce como un préstamo:",
      options: [
        "Conforming",
        "Non-Conforming",
        "Super-Conforming",
        "Ultra-Conforming"
      ],
      answer: "Non-Conforming"
    },

    // Pregunta 315
    {
      question: "¿Quién paga el descuento hipotecario?",
      options: [
        "El Comprador, salvo pacto en contrario",
        "El Banco hipotecario",
        "Siempre le corresponde al Vendedor",
        "El Gobierno"
      ],
      answer: "El Comprador, salvo pacto en contrario"
    },

    // Pregunta 316
    {
      question: "El descuento hipotecario beneficia al:",
      options: [
        "Vendedor",
        "Mercado secundario",
        "Comprador",
        "Agente inmobiliario"
      ],
      answer: "Mercado secundario"
    },
    // Pregunta 317
    {
      question: "¿Quién es el beneficiario al ejecutarse una propiedad?",
      options: [
        "El inversionista y/o el asegurador",
        "El deudor (propietario)",
        "El gobierno",
        "El corredor de bienes raíces"
      ],
      answer: "El inversionista y/o el asegurador"
    },
    // Pregunta 318
    {
      question: "FHA no aprueba lo siguiente:",
      options: [
        "Ventanas selladas con cemento",
        "Casas habitables",
        "Techos en buen estado",
        "Pisos de madera"
      ],
      answer: "Ventanas selladas con cemento"
    },

    // Pregunta 319
    {
      question:
        "Si FHA requiere reparar unas losetas, ¿Qué tipo de trabajo se debe hacer?",
      options: [
        "Solamente removerlas",
        "Remplazarlas por otras de la misma calidad",
        "Remplazarlas por otras del mismo color",
        "FHA no requiere este tipo de reparación"
      ],
      answer: "Remplazarlas por otras de la misma calidad"
    },

    // Pregunta 320
    {
      question: "¿Cuántas unidades permite un préstamo FHA?",
      options: [
        "1 sola unidad y tiene que ser la vivienda principal del dueño",
        "Hasta 4 unidades si el dueño vive una de las unidades",
        "Hasta 6 unidades",
        "Hasta 10 unidades"
      ],
      answer: "Hasta 4 unidades si el dueño vive una de las unidades"
    },

    // Pregunta 321
    {
      question: "¿Qué arreglos pudiera solicitar FHA?",
      options: [
        "Barnizar maderas",
        "Reparar pintura despegada o descascarada",
        "Cortar arbustos de más de 6 pies",
        "Reemplazar electrodomésticos viejos"
      ],
      answer: "Reparar pintura despegada o descascarada"
    },

    // Pregunta 322
    {
      question:
        "Los parámetros de cualificación en un préstamo convencional son:",
      options: ["28 / 36", "31 / 43", "29 / 41", "25 / 45"],
      answer: "28 / 36"
    },

    // Pregunta 323
    {
      question: "Los parámetros de cualificación en un préstamo FHA son:",
      options: ["31 / 43", "29 / 36", "29 / 41", "28 / 42"],
      answer: "31 / 43"
    },

    // Pregunta 324
    {
      question: "¿Cuál es la aportación mínima en un préstamo FHA?",
      options: ["3.5%", "2.25%", "0", "5%"],
      answer: "3.5%"
    },

    // Pregunta 325
    {
      question:
        "El “Funding Fee” en primera compra al 100% TV de un Veterano es:",
      options: ["2.75%", "2.30%", "1.50%", "3.00%"],
      answer: "2.30%"
    },

    // Pregunta 326
    {
      question:
        "El Funding Fee en primera compra al 95% LTV de un Reservista es:",
      options: ["2.75%", "1.65%", "1.50%", "2.00%"],
      answer: "1.65%"
    },

    // Pregunta 327
    {
      question: "¿Cuál es la agencia que otorga subsidio bajo la sección 8?",
      options: ["HUD (Housing and Urban Development)", "DACO", "USDA", "VA"],
      answer: "HUD (Housing and Urban Development)"
    },

    // Pregunta 328
    {
      question: "La Sección 8 de la Ley de Vivienda Federal:",
      options: [
        "Asegura los préstamos hipotecarios",
        "Otorga subsidio para alquileres",
        "Regula la construcción de viviendas",
        "Establece tasas de interés máximas"
      ],
      answer: "Otorga subsidio para alquileres"
    },

    // Pregunta 329
    {
      question: "La primera ley subsidio Federal fue:",
      options: [
        "Rural Development Act del 1972",
        "Bankhead-Jones Farm Tenant Act",
        "Housing Act of 1937",
        "Home Mortgage Disclosure Act of 1975"
      ],
      answer: "Bankhead-Jones Farm Tenant Act"
    },

    // Pregunta 330
    {
      question: "La primera ley Estatal (Nativa) de subsidio fue:",
      options: [
        "Ley del Plan de Subsidio Estatal al Interés del Mercado de Hipotecas (Ley 10 del 5 de julio de 1973)",
        "Ley del “Programa de Subsidio para Vivienda de Interés Social” (Ley Núm. 124 de 10 de diciembre de 1993, según enmendada)",
        "Ley de Vivienda Pública (Ley Núm. 57 de 1937)",
        "Ley de Vivienda de Bajos Ingresos (Ley Núm. 135 de 1959)"
      ],
      answer:
        "Ley del Plan de Subsidio Estatal al Interés del Mercado de Hipotecas (Ley 10 del 5 de julio de 1973)"
    },

    // Pregunta 331
    {
      question: "El seguro hipotecario se utiliza para:",
      options: [
        "Error en el título",
        "Asegura al banco en caso de falta de pago",
        "Asegura al banco en caso de fuego, terremoto, huracán",
        "Asegura al comprador en caso de defectos de construcción"
      ],
      answer: "Asegura al banco en caso de falta de pago"
    },

    // Pregunta 332
    {
      question:
        "¿En el cierre hipotecario hay que pagar el seguro Hazard por adelantado por cuántos meses?",
      options: ["6 meses", "12 meses", "3 meses", "9 meses"],
      answer: "12 meses"
    },
    // Pregunta 333
    {
      question: "¿Qué es un REIT?",
      options: [
        "Real Estate Investment Trust - Un fideicomiso de inversión en bienes raíces que posee, opera o financia bienes raíces que generan ingresos",
        "Real Estate Individual Tax - Se refiere a las contribuciones que tiene que pagar un individuo por las propiedades que posea y que generen ingresos",
        "Real Estate Investment Tax - Un impuesto sobre las ganancias de las inversiones en bienes raíces",
        "Real Estate Investment Trade - Un tipo de transacción inmobiliaria a gran escala en el mercado de bienes raíces"
      ],
      answer:
        "Real Estate Investment Trust - Un fideicomiso de inversión en bienes raíces que posee, opera o financia bienes raíces que generan ingresos"
    },

    // Pregunta 334
    {
      question:
        "El Banco Dorado le negó un financiamiento a un cliente porque la comunidad en la que está localizada la propiedad no está en buen estado y el banco no financia propiedades en esa área. ¿Qué acto ilegal está cometiendo la institución hipotecaria?",
      options: [
        "Redlining",
        "Blockbusting",
        "Blockbusting",
        "Segregación hipotecaria"
      ],
      answer: "Redlining"
    },
    // Pregunta 335
    {
      question:
        "¿Cuál es el propósito principal de la regla de divulgación hipotecaria 'Know Before You Owe' (TILA-RESPA Rule o TRID)?",
      options: [
        "Implementar nuevos requisitos regulatorios para los prestamistas con el objetivo de mejorar la transparencia en las transacciones hipotecarias.",
        "La regla TILA-RESPA consolida cuatro divulgaciones existentes requeridas por TILA y RESPA para ciertas transacciones, en dos formularios clave; Estimado del Préstamo y Divulgación de Cierre.",
        "Eliminar la Divulgación de Veracidad en Préstamos como parte de un esfuerzo más amplio para simplificar las regulaciones asociadas con los préstamos hipotecarios.",
        "Establecer restricciones específicas en las transacciones hipotecarias con el fin de proteger los derechos de los consumidores y garantizar prácticas justas por parte de los prestamistas."
      ],
      answer:
        "La regla TILA-RESPA consolida cuatro divulgaciones existentes requeridas por TILA y RESPA para ciertas transacciones, en dos formularios clave; Estimado del Préstamo y Divulgación de Cierre."
    },
    // Pregunta 351
    {
      question: "[Pregunta no proporcionada]",
      options: ["[Opciones no proporcionadas]"],
      answer: "[Respuesta no proporcionada]"
    }
  ],
  crim: [
    // Pregunta 352
    {
      question: "El CRIM está compuesto por una Junta Directiva de:",
      options: [
        "9 miembros; 7 son alcaldes, el Presidente del Banco Gubernamental de Fomento y el Comisionado de Asuntos Municipales",
        "10 miembros; 8 son alcaldes, el Presidente del Banco Gubernamental de Fomento y el Comisionado de Asuntos Municipales",
        "8 miembros; 6 son alcaldes, el Presidente del Banco Gubernamental de Fomento y el Comisionado de Asuntos Municipales",
        "11 miembros; 9 son alcaldes, el Presidente del Banco Gubernamental de Fomento y el Comisionado de Asuntos Municipales"
      ],
      answer:
        "9 miembros; 7 son alcaldes, el Presidente del Banco Gubernamental de Fomento y el Comisionado de Asuntos Municipales"
    },

    // Pregunta 353
    {
      question: "¿Cuánto es la dieta diaria de un miembro de la Junta?",
      options: [
        "$100.00 diarios más millaje",
        "$100.00 diarios más dieta y millaje",
        "Igual a los miembros de la Asamblea Legislativa de Puerto Rico",
        "$75.00 diarios más dieta y millaje"
      ],
      answer: "Igual a los miembros de la Asamblea Legislativa de Puerto Rico"
    },

    // Pregunta 354
    {
      question:
        "Según la ley, la Institución autorizada de legislar e imponer los porcientos contributivos sobre la propiedad Inmueble es:",
      options: [
        "La Legislatura de Puerto Rico",
        "La Rama Judicial con el Gobernador de Puerto Rico",
        "Los Municipios mediante ordenanza municipal",
        "El CRIM"
      ],
      answer: "Los Municipios mediante ordenanza municipal"
    },

    // Pregunta 355
    {
      question:
        "El contribuyente tiene derecho a tener exoneración contributiva para:",
      options: [
        "La residencia principal del contribuyente o sus familiares hasta $15,000",
        "La residencia que alquila o para sus familiares hasta $15,000",
        "Hasta 4 unidades incluyendo su residencia principal",
        "La residencia principal del contribuyente hasta $10,000"
      ],
      answer:
        "La residencia principal del contribuyente o sus familiares hasta $15,000"
    },

    // Pregunta 356
    {
      question:
        "La Agencia encargada de cobrar a las personas las contribuciones sobre la Propiedad Inmueble se llama:",
      options: [
        "Municipio",
        "CRIM",
        "Departamento de Hacienda",
        "Departamento de Finanzas"
      ],
      answer: "CRIM"
    },

    // Pregunta 357
    {
      question: "La ley que creó el CRIM es:",
      options: [
        "Ley 80 de 1991",
        "Ley 10 de 1994",
        "Ley 24 de 1985",
        "Ley 49 de 1987"
      ],
      answer: "Ley 80 de 1991"
    },

    // Pregunta 358
    {
      question: "¿Qué beneficio ofrece la Ley 24?",
      options: [
        "Exención de Veterano",
        "Exoneración contributiva",
        "Exención de propiedades comerciales",
        "Exención de propiedades alquiladas"
      ],
      answer: "Exoneración contributiva"
    },

    // Pregunta 359
    {
      question: "La ley de Municipios Autónomos empezó en el año:",
      options: ["1957", "1991", "1977", "1984"],
      answer: "1991"
    },

    // Pregunta 360
    {
      question: "El año contributivo es el mismo:",
      options: ["Año Natural", "Año Fiscal", "Año General", "Año Civil"],
      answer: "Año Fiscal"
    },

    // Pregunta 361
    {
      question: "El primer semestre contributivo vence en:",
      options: ["1 de enero", "30 de junio", "1 de julio", "31 de diciembre"],
      answer: "1 de julio"
    },

    // Pregunta 362
    {
      question: "El segundo semestre contributivo vence en:",
      options: ["1 de enero", "30 de junio", "1 de julio", "31 de diciembre"],
      answer: "1 de enero"
    },

    // Pregunta 363
    {
      question: "Las Contribuciones sobre la Propiedad se pagan en:",
      options: [
        "Departamento de Estado",
        "CRIM",
        "Junta de Planificación",
        "Departamento de Hacienda"
      ],
      answer: "CRIM"
    },

    // Pregunta 364
    {
      question:
        "El cálculo de valor de una propiedad hecho para propósitos contributivos se conoce como:",
      options: [
        "Tasación",
        "Avalúo o 'Assesed Value'",
        "Lapidaria",
        "Valoración Fiscal"
      ],
      answer: "Avalúo o 'Assesed Value'"
    },

    // Pregunta 365
    {
      question:
        "El número de identificación que tiene una propiedad que ha sido tasada para propósitos contributivos es:",
      options: [
        "Número de Finca",
        "Número de Catastro",
        "Número Registral",
        "Número de Identificación Contributiva"
      ],
      answer: "Número de Catastro"
    },

    // Pregunta 366
    {
      question: "Cuántos dígitos tiene el número de catastro:",
      options: ["10", "11", "15", "16"],
      answer: "16"
    },

    // Pregunta 367
    {
      question:
        "De la pregunta anterior, cuántos dígitos representan el Municipio:",
      options: ["Primeros 2", "Primeros 4", "Primeros 6", "Primeros 8"],
      answer: "Primeros 2"
    },
    // Pregunta 368
    {
      question:
        "La ley 7 del 2009 conocida como Ley de Emergencia Fiscal que estableció una contribución especial, se hizo multiplicando el valor contributivo por:",
      options: ["20", "10", "5", "15"],
      answer: "10"
    },

    // Pregunta 369
    {
      question:
        "Un estudio detallado del estado contributivo de una propiedad se conoce como:",
      options: [
        "La Lapidaria o Certificación de Valores Contributivos",
        "La Lapidaria o Certificación de Deuda Contributiva",
        "El Estado Contributivo Fiscal",
        "La Inspección Contributiva Detallada"
      ],
      answer: "La Lapidaria o Certificación de Valores Contributivos"
    },

    // Pregunta 370
    {
      question:
        "Para tasar un Inmueble para fines contributivos se utilizan unos Costos Unitarios que son del año:",
      options: ["1957", "2006", "1995", "2010"],
      answer: "1957"
    },

    // Pregunta 371
    {
      question:
        "Para que una persona tenga derecho a la ley 24 (exoneración contributiva) tiene que cumplir con los siguientes requisitos:",
      options: [
        "Ser dueño de la propiedad y vivirla",
        "Ser dueño de la propiedad, puede estar rentada",
        "Ser residente en el país",
        "No tener deudas contributivas"
      ],
      answer: "Ser dueño de la propiedad y vivirla"
    },

    // Pregunta 372
    {
      question:
        "La exoneración del pago de contribuciones impuestas sobre la propiedad inmueble residencial hasta el límite de $15 mil de valoración tasada para fines contributivos aplica para una sola vivienda para un mismo contribuyente, hasta un máximo de solar de:",
      options: [
        "500 metros cuadrados",
        "1 cuerda",
        "No tiene límite",
        "2,000 metros cuadrados"
      ],
      answer: "1 cuerda"
    },
    // Pregunta 373
    {
      question: "La ley que concede exención contributiva a los Veteranos es:",
      options: [
        "Ley 120, 1994",
        "Ley 10, 1994",
        "Ley 13, 1980",
        "Ley 24, 2009"
      ],
      answer: "Ley 13, 1980"
    },

    // Pregunta 374
    {
      question: "El Veterano tiene una exención adicional de:",
      options: [
        "$10,000 del valor tasado",
        "$5,000 del valor tasado",
        "$15,000 del valor tasado"
      ],
      answer: "$5,000 del valor tasado"
    },

    // Pregunta 375
    {
      question: "La Exención de Veterano aplica a un solar máximo de:",
      options: [
        "1,000 m/c en zona urbana y 1 cuerda en zona rural",
        "500 M/C en zona urbana y 1 cuerda en zona rural",
        "No tiene máximo",
        "2,000 m/c en zona urbana y 2 cuerdas en zona rural"
      ],
      answer: "1,000 m/c en zona urbana y 1 cuerda en zona rural"
    },

    // Pregunta 376
    {
      question:
        "Según el CRIM, ¿qué beneficio aplicaría a veteranos incapacitados o con impedimentos en relación con las contribuciones de propiedad?",
      options: [
        "Recibirán un descuento del 50% en las contribuciones.",
        "Recibirán el 100% de las contribuciones por su propiedad, siempre que sea su residencia o la de su familia inmediata.",
        "Obtendrán un reembolso total de las contribuciones pagadas.",
        "No hay beneficios específicos para veteranos en el CRIM."
      ],
      answer:
        "Recibirán el 100% de las contribuciones por su propiedad, siempre que sea su residencia o la de su familia inmediata."
    },
    // Pregunta 377
    {
      question:
        "¿Qué NO otorgó la Ley 132 del 2010, conocida como 'Ley de Estímulo al Mercado de Propiedades Inmuebles'?",
      options: [
        "Exención en el pago de la contribución sobre la propiedad inmueble y la contribución especial estatal sobre propiedad inmueble con respecto a propiedades de nueva construcción.",
        "Exención del pago de contribuciones sobre ingresos en el arrendamiento de propiedades residenciales por un término de diez (10) años",
        "Exención en el pago de derechos y aranceles para instrumentos públicos.",
        "Exención del pago de los gastos de cierre y seguros."
      ],
      answer: "Exención del pago de los gastos de cierre y seguros."
    },
    //Pregunta 378
    {
      question:
        "Tasación CRIM $30,000 / Tasación Venta $140,000 / Tasa Contributiva 7% / Aplica Exoneración). ¿Determine la contribución a pagar al cabo de 4 años?",
      options: ["4,200", "3,900", "2,600", "5,500"],
      answer: "4,200"
    },

    // Pregunta 379
    {
      question:
        "10% por los primeros 3 años. (Datos en la pagina 85 del Repaso)",
      options: ["$4,000", "$7,500", "$5,700", "Ninguna de las anteriores"],
      answer: "$7,500"
    },

    // Pregunta 380
    {
      question:
        "11% por los próximos 7 años. (Datos en la pagina 85 del Repaso)",
      options: ["$19,250", "$40,000", "$100,000", "Ninguna de las anteriores"],
      answer: "$19,250"
    },

    // Pregunta 381
    {
      question:
        "12% por los restantes 2 años. (Datos en la pagina 85 del Repaso)",
      options: ["$9,000", "$6,000", "$5,000", "$0"],
      answer: "$6,000"
    }
  ],

  zonificacion: [
    // Pregunta 391
    {
      question: "Mediante la Zonificación se clasifican los terrenos en:",
      options: [
        "Residencial y Comercial",
        "Residencial, Industrial, Comercial y Agrícola",
        "Industrial y Comercial",
        "Residencial, Comercial, Industrial y de Conservación"
      ],
      answer: "Residencial, Industrial, Comercial y Agrícola"
    },

    // Pregunta 392
    {
      question:
        "La Agencia Administrativa encargada de la Zonificación de Terrenos en Puerto Rico es:",
      options: [
        "OGPe",
        "CRIM",
        "Junta de Planificación",
        "Departamento de Recursos Naturales y Ambientales"
      ],
      answer: "Junta de Planificación"
    },

    // Pregunta 393
    {
      question: "¿Qué es un mapa de Zonificación?",
      options: [
        "Mapa asignado al registro de la propiedad",
        "Documento público en forma de plano que muestra las diferentes clasificaciones de los terrenos",
        "Documento público que especifica la zona de inundabilidad de los terrenos",
        "Plano que muestra la topografía y uso actual de los terrenos"
      ],
      answer:
        "Documento público en forma de plano que muestra las diferentes clasificaciones de los terrenos"
    },

    // Pregunta 394
    {
      question: "¿Qué permisos emite OGPe?",
      options: [
        "Uso, Construcción y Zonificación",
        "Uso, Demolición, Construcción y Letreros",
        "Uso, Remodelación y Zonificación",
        "Uso, Construcción, Remodelación y Demolición"
      ],
      answer: "Uso, Demolición, Construcción y Letreros"
    },

    // Pregunta 395
    {
      question: "¿Qué es Zonificación?",
      options: [
        "Procedimiento o Método por el cual se guía el desarrollo o crecimiento de las ciudades",
        "Reglamento que regula la parte Administrativa de ARPE",
        "Proceso de asignación de usos específicos para diferentes áreas de un municipio",
        "Sistema de regulación para el uso y desarrollo del suelo urbano y rural"
      ],
      answer:
        "Procedimiento o Método por el cual se guía el desarrollo o crecimiento de las ciudades"
    },

    // Pregunta 396
    {
      question: "¿Cuál de las siguientes NO es un distrito de zonificación?",
      options: ["C-1", "R-3", "R-7", "F-2"],
      answer: "R-7"
    },

    // Pregunta 397
    {
      question: "¿Cuántos distritos residenciales existen?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },

    // Pregunta 398
    {
      question: "¿Cuál de los siguientes no es un distrito de Zonificación?",
      options: [
        "RT - Residencial Turístico",
        "CT - Comercial Turístico",
        "RI - Residencial Industrial",
        "RE - Residencial Educativo"
      ],
      answer: "RI - Residencial Industrial"
    },

    // Pregunta 399
    {
      question: "El distrito de zonificación PP se refiere a:",
      options: [
        "Playas Privadas",
        "Playas Públicas",
        "Cualquier Playa",
        "Parques y Plazas"
      ],
      answer: "Playas Públicas"
    },

    // Pregunta 400
    {
      question: "El distrito P significa:",
      options: [
        "Zona de uso Público",
        "Zona de uso Privado",
        "Zona de Propiedades",
        "Planificación Urbana"
      ],
      answer: "Zona de uso Público"
    },

    // Pregunta 401
    {
      question: "Uno de los usos del distrito P podría ser:",
      options: [
        "Negocio Privado",
        "Cualquier propiedad comercial",
        "Parque de Bombas (bomberos)",
        "Áreas de Recreación Pública"
      ],
      answer: "Parque de Bombas (bomberos)"
    },

    // Pregunta 402
    {
      question: "B2 significa",
      options: [
        "Negocio en área de bosque",
        "Bosque de árboles",
        "Bosque de Mangle",
        "Zona Comercial Secundaria"
      ],
      answer: "Bosque de Mangle"
    },

    // Pregunta 403
    {
      question: "El distrito M significa:",
      options: [
        "Requiere Mejoras",
        "Marítimo",
        "Industrial Moderado",
        "Mixto (Residencial y Comercial)"
      ],
      answer: "Requiere Mejoras"
    },

    // Pregunta 404
    {
      question: "El distrito C-3 es:",
      options: [
        "Zona que permite centros comerciales y algunos usos industriales",
        "Zona que permite áreas comerciales para que suplan a residentes de una gran variedad de usos comerciales e institucionales en todas las plantas",
        "Edificios y condominios residenciales y comerciales",
        "Zona comercial de alta densidad con diversidad de usos"
      ],
      answer:
        "Zona que permite áreas comerciales para que suplan a residentes de una gran variedad de usos comerciales e institucionales en todas las plantas"
    },

    // Pregunta 405
    {
      question: "IL-1 significa:",
      options: [
        "Industrial Liviano limitado",
        "Industrial residencial",
        "Industrial Liviano",
        "Industrial Liviano con restricciones específicas"
      ],
      answer: "Industrial Liviano limitado"
    },

    // Pregunta 406
    {
      question: "R-0 tiene un área mínima de:",
      options: [
        "8,000 metros cuadrados",
        "900 metros cuadrados",
        "800 metros cuadrados",
        "700 metros cuadrados"
      ],
      answer: "8,000 metros cuadrados"
    },

    // Pregunta 407
    {
      question: "La cabida mínima de R-1:",
      options: [
        "900 metros m/c",
        "800 metros m/c",
        "700 metros m/c",
        "1000 metros m/c"
      ],
      answer: "900 metros m/c"
    },

    // Pregunta 408
    {
      question: "El ancho mínimo del solar en R-1 es:",
      options: ["25 metros", "50 metros", "20 metros", "30 metros"],
      answer: "25 metros"
    },

    // Pregunta 409
    {
      question: "La cabida mínima de R-4:",
      options: ["800 m/c", "450 m/c", "250 m/c", "500 m/c"],
      answer: "250 m/c"
    },

    // Pregunta 410
    {
      question:
        "¿Cuál es el máximo de plantas (altura) de un edificio dentro del distrito R-3?",
      options: ["1 planta", "2 plantas", "Depende de la densidad", "3 plantas"],
      answer: "2 plantas"
    },

    // Pregunta 411
    {
      question: "El distrito R4 tiene las siguientes características:",
      options: [
        "Densidad Intermedia, Solar mínimo de 250 metros2, ancho mínimo 12 metros, altura máxima de 2 plantas y 9 metros, Casas de 1 o 2 familias, Casas en Hileras y de Apartamentos.",
        "Densidad Intermedia, Solar mínimo de 300 metros2, ancho mínimo 12 metros, altura máxima de 2 plantas y 9 metros, Casas de 1 o 2 familias, Casas en Hileras y de Apartamentos",
        "Densidad Intermedia, Solar máximo de 250 metros2, ancho mínimo 12 metros, altura máxima de 2 plantas y 9 metros, Casas de 1 o 2 familias, Casas en Hileras y de Apartamentos",
        "Densidad Intermedia, Solar mínimo de 200 metros2, ancho mínimo 12 metros, altura máxima de 2 plantas y 9 metros, Casas de 1 o 2 familias, Casas en Hileras y de Apartamentos"
      ],
      answer:
        "Densidad Intermedia, Solar mínimo de 250 metros2, ancho mínimo 12 metros, altura máxima de 2 plantas y 9 metros, Casas de 1 o 2 familias, Casas en Hileras y de Apartamentos."
    },

    // Pregunta 412
    {
      question:
        "¿Cuál es el máximo de plantas (altura) de un edificio dentro del distrito R-5?",
      options: ["1 planta", "2 plantas", "Depende de la densidad", "3 plantas"],
      answer: "Depende de la densidad"
    },

    // Pregunta 413
    {
      question:
        "El distrito de Zonificación que permite actividades comerciales en áreas residenciales es:",
      options: ["R-1", "R-2", "C-1", "R-3"],
      answer: "C-1"
    },

    // Pregunta 414
    {
      question: "El Distrito de Zonificación C-1 es de:",
      options: ["200 m/c", "300 m/c", "400 m/c", "500 m/c"],
      answer: "300 m/c"
    },

    // Pregunta 415
    {
      question: "El distrito CT-1:",
      options: [
        "Comercial Turístico – distrito dirigido a Turistas y Residentes",
        "Comercial Terrestre – distrito dirigido a proteger terrenos comerciales turísticos",
        "Comercial Turístico – distrito especializado en servicios turísticos",
        "Comercial Terrestre – distrito enfocado en comercio local"
      ],
      answer: "Comercial Turístico – distrito dirigido a Turistas y Residentes"
    },

    // Pregunta 416
    {
      question:
        "El siguiente distrito de zonificación es para zonas turísticas y áreas de interés público:",
      options: ["R-6", "R-5", "R-3", "RT-1"],
      answer: "RT-6"
    },

    // Pregunta 417
    {
      question: "El Distrito de Zonificación R-3 tiene un solar de:",
      options: ["300 m/c máximo", "300 m/c mínimo", "300 m/c", "350 m/c"],
      answer: "300 m/c mínimo"
    },

    // Pregunta 418
    {
      question: "El Distrito de Zonificación R-3 tiene ancho mínimo de:",
      options: ["15 metros", "12 metros", "10 metros", "18 metros"],
      answer: "12 metros"
    },

    // Pregunta 419
    {
      question: "La cabida mínima de R-5:",
      options: ["400 m/c", "300 m/c", "250 m/c", "350 m/c"],
      answer: "400 m/c"
    },

    // Pregunta 420
    {
      question: "El distrito RG significa:",
      options: [
        "Rural General",
        "Residencial General",
        "Rústico General",
        "Recreativo General"
      ],
      answer: "Rural General"
    },

    // Pregunta 421
    {
      question: "Una Supermanzana es:",
      options: [
        "Una manzana que consta de 500 unidades de vivienda",
        "Una manzana que consta de 600 unidades de vivienda",
        "Una manzana que consta de 700 unidades de vivienda",
        "Una manzana de gran tamaño con múltiples servicios y comodidades"
      ],
      answer: "Una manzana que consta de 700 unidades de vivienda"
    },

    // Pregunta 422
    {
      question: "Una Hospedería o 'Guest House' debe tener:",
      options: [
        "Por lo menos un espacio de estacionamiento para el dueño o administrador y un espacio estacionamiento por cada 3 habitaciones",
        "6 espacios de estacionamiento",
        "1 espacio para el dueño más 12 espacios adicionales de estacionamiento",
        "Espacio suficiente de estacionamiento según la capacidad de la hospedería"
      ],
      answer:
        "Por lo menos un espacio de estacionamiento para el dueño o administrador y un espacio estacionamiento por cada 3 habitaciones"
    },

    // Pregunta 423
    {
      question:
        "¿Cuántas habitaciones puede tener el Hotel que tenga 15 estacionamientos?",
      options: ["45", "15", "30", "60"],
      answer: "45"
    },

    // Pregunta 424
    {
      question:
        "La segregación de un terreno para una nueva construcción de una urbanización de más de 11 unidades de vivienda, con 2 unidades comerciales y 1 parques recreativo, se conoce como:",
      options: ["Segregación", "Lotificación", "Agrupación", "Subdivisión"],
      answer: "Lotificación"
    },

    // Pregunta 425
    {
      question:
        "Si se va a hacer una construcción en un municipio autónomo, a quién hay que pedir permiso:",
      options: ["A la Junta de Planificación", "ARPE", "OGPE", "Al Municipio"],
      answer: "Al Municipio"
    },

    // Pregunta 426
    {
      question:
        "En la ley 124 de subsidio, ¿qué cantidad tendría que reembolsar una persona que compró su casa con el subsidio y la vende a los 5 años?",
      options: ["80%", "100%", "60%", "40%"],
      answer: "40%"
    }
  ]
};
function loadQuestions(topic) {
  questions = allQuestions[topic];
  currentQuestion = 0;
  score = 0;
  displayQuestion();
  document.getElementById("homePage").style.display = "none";
  document.getElementById("container").style.display = "block";
}

function displayQuestion() {
  let current = questions[currentQuestion];
  questionText.innerHTML = current.question;
  optionsContainer.innerHTML = "";

  // Mezcla las opciones de respuesta
  let shuffledOptions = shuffleArray(current.options);

  shuffledOptions.forEach((option) => {
    let button = document.createElement("button");
    button.innerText = option;
    button.addEventListener("click", (e) => checkAnswer(e, current.answer));
    optionsContainer.appendChild(button);
  });
}

// Función para mezclar un arreglo (Algoritmo de Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function checkAnswer(e, correctAnswer) {
  let selectedOption = e.target.innerText;
  if (selectedOption === correctAnswer) {
    e.target.style.backgroundColor = "#4CAF50";
    score++;
  } else {
    e.target.style.backgroundColor = "#FF0000";
    Array.from(optionsContainer.children).forEach((button) => {
      if (button.innerText === correctAnswer) {
        button.style.backgroundColor = "#4CAF50";
      }
    });
  }
  Array.from(optionsContainer.children).forEach((button) => {
    button.disabled = true;
  });
  displayResult();
}

function displayResult() {
  resultText.innerHTML = `Respuestas correctas: ${score} de ${questions.length}`;
  nextButton.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
    resultText.innerHTML = "";
    nextButton.style.display = "none";
  } else {
    showFinalResults();
  }
}

function showFinalResults() {
  questionText.innerHTML = "¡Has completado el Tema!";
  optionsContainer.innerHTML = "";
  resultText.innerHTML = `Puntuación final: ${score} de ${questions.length}`;
  nextButton.innerHTML = "Reiniciar";
  nextButton.onclick = restartQuiz;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  nextButton.innerHTML = "Siguiente Pregunta";
  nextButton.onclick = nextQuestion;
  nextButton.style.display = "none";
  resetOptionButtonStyles();
  document.getElementById("homePage").style.display = "block";
  document.getElementById("container").style.display = "none";
}

function resetOptionButtonStyles() {
  Array.from(optionsContainer.children).forEach((button) => {
    button.style.backgroundColor = "";
    button.disabled = false;
  });
}

// Manejador de eventos para el botón de volver a la página principal
homeButton.addEventListener("click", function () {
  document.getElementById("container").style.display = "none";
  document.getElementById("homePage").style.display = "block";
});

nextButton.addEventListener("click", nextQuestion);

// Inicialización
document.getElementById("container").style.display = "none";
