 function calcular() {
            // Pega os valores dos inputs
            const doseNecessaria = parseFloat(document.getElementById('doseNecessaria').value);
            const doseComprimido = parseFloat(document.getElementById('doseComprimido').value);
            const doseGota = parseFloat(document.getElementById('doseGota').value);

            if (isNaN(doseNecessaria) || isNaN(doseComprimido) || isNaN(doseGota)) {
                Swal.fire("Por favor, preencha todos os campos com valores válidos.");
                return;
            }

            // Calcula o número de comprimidos necessários
            const comprimidosNecessarios = doseNecessaria / doseComprimido;

            // Calcula o número de gotas necessárias
            const gotasNecessarias = doseNecessaria / doseGota;

            // Exibe os resultados
            const resultado = `
                <p>Gotas necessárias: <strong>${gotasNecessarias.toFixed(2)}</strong></p>
            `;

            Swal.fire({
                title: "Comprimidos necessários: " + gotasNecessarias,
                icon: "success",
                draggable: true
              });
        }