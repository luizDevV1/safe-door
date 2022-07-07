abstract class Data {
    required_field = function (field?: string): true | string {
        return !!field || 'Campo requerido'
    }
}

export default Data
