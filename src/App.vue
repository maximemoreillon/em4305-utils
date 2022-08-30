<template>
  <div>
    <h1>EM4305 utils</h1>

    <p>
      <a href="assets/EM4205-4305.pdf">Reference</a>
    </p>

    <p>
      <label for="Input">Value to write</label>
      <input type="text" v-model="hex" id="input">
    </p>


    <table>
      <tr>
        <td>Cleaned ({{cleaned_data.length/2}} bytes)</td>
        <td>{{cleaned_data}}</td>
      </tr>
      <tr>
        <td>Binary</td>
        <td>{{hex_to_bin(cleaned_data)}}</td>
      </tr>
      <tr>
        <td>EM4100 decoded (binary) ({{em4100_decoding.output.length}})</td>
        <td>{{ em4100_decoding.output }}</td>
      </tr>
      <tr>
        <td>EM4100 decoded (Hex)</td>
        <td>{{ bin_to_hex(em4100_decoding.output) }}</td>
      </tr>

      <tr>
        <td>Word 5</td>
        <td>0x{{ bin_to_hex(em4100_decoding.output).slice(0,8) }}</td>
      </tr>
      <tr>
        <td>Word 6</td>
        <td>0x{{ bin_to_hex(em4100_decoding.output).slice(8,16) }}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td v-for="(bit, i) in hex_to_bin(cleaned_data).slice('')" :key="`bit_${i}`" class="data_bit">
          <div class="bit_label">D{{i}}</div>
          <div class="bit">{{bit}}</div>
        </td>
      </tr>
    </table>



    <table>
      <tr v-for="(row, row_index) in em4100_decoding.data_bits_table" :key="`row_${row_index}`">

        <td class="data_bit" v-for="(col, col_index) in row" :key="`row_${col_index}`">

          <div class="bit_label">D{{ 4*row_index + col_index }}</div>
          <div class="bit">{{col}}</div>

        </td>
        <!-- Row parity bits -->
        <td class="row_parity_bit">
          <div class="bit_label">P{{row_index}}</div>
          <div class="bit">{{em4100_decoding.row_parity_bits[row_index]}}</div>
        </td>
      </tr>

      <!-- Columns parity bits -->
      <tr>
        <td class="column_parity_bit" v-for="(column_parity_bit, col_index) in em4100_decoding.column_parity_bits"
          :key="`column_parity_bit_${col_index}`">
          <div class="bit_label">PC{{col_index}}</div>
          <div class="bit">{{column_parity_bit}}</div>
        </td>
        <td class="stop_bit">
          <div class="bit_label">S0</div>
          <div class="bit">0</div>
        </td>
      </tr>
    </table>

    <table>
      <tr>

        <td class="header_bit" v-for="(_, i) in 9" :key="`header_bint_${i}`">
          <div class="bit_label">H{{i}}</div>
          <div class="bit">1</div>
        </td>

        <template v-for="(row, row_index) in em4100_decoding.data_bits_table">

          <td class="data_bit" v-for="(col, col_index) in row" :key="`row_${row_index}_col_${col_index}`">

            <div class="bit_label">D{{ 4*row_index + col_index }}</div>
            <div class="bit">{{col}}</div>

          </td>

          <!-- Row parity bits -->
          <td class="row_parity_bit" :key="`row_${row_index}_parity`">
            <div class="bit_label">P{{row_index}}</div>
            <div class="bit">{{em4100_decoding.row_parity_bits[row_index]}}</div>
          </td>

        </template>

        <td class="column_parity_bit" v-for="(column_parity_bit, col_index) in em4100_decoding.column_parity_bits"
          :key="`column_parity_bit_${col_index}`">
          <div class="bit_label">PC{{col_index}}</div>
          <div class="bit">{{column_parity_bit}}</div>
        </td>
        <td class="stop_bit">
          <div class="bit_label">S0</div>
          <div class="bit">0</div>
        </td>



      </tr>

    </table>



  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      hex: '0x0000CDB71C',
      //hex: '0x0000000000',
    }
  },
  methods: {

    bin_to_hex(input){

      const byte_count = input.length / 8
      let output = ''

      for (let byte_index = 0; byte_index < byte_count; byte_index++) {
        const start_index = 8*byte_index
        const end_index = 8*byte_index + 8
        const byte_bin = input.slice(start_index, end_index)
        const byte_hex  = parseInt(byte_bin, 2).toString(16).toUpperCase().padStart(2,'0')
        output +=byte_hex
      }
      return output
    },
    hex_to_bin(input){
      const byte_count = input.length / 2
      let output = ''

      for (let byte_index = 0; byte_index < byte_count; byte_index++) {
        const start_index = 2*byte_index
        const end_index = 2*byte_index + 2
        const byte_hex = input.slice(start_index, end_index)
        const byte_bin  = parseInt(byte_hex, 16).toString(2).padStart(8,'0')
        output +=byte_bin
      }
      return output
    },
    reverse_bytes(input){
      const byte_count = input.length / 8

      let output = ''

      for (var byte_index = 0; byte_index < byte_count; byte_index++) {
        for (var i = 7; i >= 0; i--) {
          const bit_index = 8*byte_index + i
          output += input[bit_index]
        }
      }

      return output

    }

  },
  computed: {
    cleaned_data(){
      const prefix_removed = this.hex.split('0x')
      const space_removed = prefix_removed[prefix_removed.length-1].replace(/\s/g, "")
      return space_removed
    },

    em4100_decoding(){

      const input = this.hex_to_bin(this.cleaned_data)

      const input_split = input.split('').map(e => Number(e))


      const data_bits_table = []

      // 9 rows of 4 bits
      for (let row = 0; row < 10; row++) {
        data_bits_table[row] = []
        for (let col = 0; col < 4; col++) {
          data_bits_table[row][col] = input_split[4*row+col]
        }
      }


      //const row_parity_bits = []
      const row_parity_bits = data_bits_table
        .map(row => row.reduce((acc,e) => acc + e, 0) %2 )


      const column_parity_bits = data_bits_table
        .reduce((acc, row) => row.map((e, col_index) => acc[col_index] + e ), [0,0,0,0])
        .map(e => e%2)



      let output = ''

      // 9bit header bits
      for (var i = 0; i < 9; i++) {
        //output.push(1)
        output += 1
      }

      // Insert data bits with row parity bits in between
      data_bits_table.forEach((row, row_index) => {
        row.forEach( bit => { output += bit })
        //output.push(row_parity_bits[row_index])
        output += row_parity_bits[row_index]
      })

      // Column parity bits
      column_parity_bits.forEach( bit => {
        // output.push(bit)
        output += bit
      })


      // Stop bit
      output += 0
      // output.push(0)

      //const output = output.map(e=>String(e)).join('')
      const output_reversed = this.reverse_bytes(output)

      return {

        output: output_reversed,
        data_bits_table,
        row_parity_bits,
        column_parity_bits,
      }



    }


  }
}
</script>

<style>
table {
  margin: 1em 0;
  border-collapse: collapse;
}
th, td {
  border: 1px solid black;
  padding: 0.1em;
}

.data_bit {
  background-color: rgb(204, 255, 255);
}

.row_parity_bit {
  background-color: rgb(255, 204, 153);
}

.column_parity_bit {
  background-color: rgb(255, 179, 153);
}

.stop_bit, .header_bit {
  background-color: rgb(255, 102, 102);
}

.bit_label {
  text-align: center;
  color: #666666;
  font-size: 60%;
}
.bit {
  font-size: 90%;
  text-align: center;
  padding: 0.25em 0.5em;
}

label {
  margin-right: 0.5em;
}
</style>
