class Model {
    constructor() {
        this.storesListEnd = ''
        this.storeId = ''
        this.html = ''

    }

    /**
     * Request for update store list
     *
     * @param
     * @return {response} return array stores
     * @private
     */

    updateListStores() {
        return (fetch("http://localhost:3000/api/Stores")
        .then(response => {
            return response.json();
        }))
    }

    /**
     * Request for get store
     *
     * @param
     * @return {response} return store
     * @private
     */

    getStore(floor) {
        return(fetch("http://localhost:3000/api/Stores?filter=%7B%22where%22%3A%7B%22FloorArea%22%3A%22" + floor + "%22%7D%7D")
        .then(response => {
            return response.json();
        }).then(response => {
            return response
        }))
    }

        /**
     * Request for get product details
     *
     * @param
     * @return {response} return product
     * @private
     */

    getProductDetails(floor) {
        return(fetch("http://localhost:3000/api/Stores?filter=%7B%22where%22%3A%7B%22FloorArea%22%3A%22" + floor + "%22%7D%7D")
        .then(response => {
            return response.json();
        }).then(response => {
            this.storeId = response[0].id
            return response[0].id
        }).then(response => {
            return fetch("http://localhost:3000/api/Products?filter=%7B%22where%22%3A%7B%22StoreId%22%3A%22" + response + "%22%7D%7D")
        }).then(response => {
            return response.json()
        }))
        .then(response => {
            return response
        })
    }

    /**
     * Request for set store to server
     *
     * @param
     * @return
     * @private
     */

    fetchPostStore(data) {
        fetch('http://localhost:3000/api/Stores', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => 
            response.json()
        )
        .then(response => {
            this.storeId = response.id
        });
    }

    /**
     * Request for set product to server
     *
     * @param
     * @return
     * @private
     */

    fetchPostProduct(data) {
        data.StoreId = this.storeId
        fetch('http://localhost:3000/api/Products', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
    }

    /**
     * Request for delete product to server
     *
     * @param
     * @return
     * @private
     */
    
    fetchDeleteStore() {
        fetch('http://localhost:3000/api/Stores/'+this.storeId+'', {
            method: 'DELETE',
            headers: {'content-type': 'application/json'},
        })
        fetch("http://localhost:3000/api/Products?filter=%7B%22where%22%3A%7B%22StoreId%22%3A%22" + this.storeId + "%22%7D%7D")
        .then(response => {
            return response.json();
        })
    }

        /**
     * Request for get filtered value
     *
     * @param
     * @return {response} return filtered array
     * @private
     */

    fetchFiltres(status) {
    return (fetch("http://localhost:3000/api/Products?filter=%7B%22where%22%3A%7B%22and%22%3A%5B%7B%22StoreId%22%3A" + this.storeId + "%7D%2C%7B%22Status%22%3A%22" + status+ "%22%7D%5D%7D%7D")
        .then(response => {
            return response.json();
        }).then(response => {
            return response
        }))
    }

        /**
     * Request for delete product 
     *
     * @param
     * @return
     * @private
     */    

    fetchProductDelete(nameFilter, priceFilter, specsFilter, supplierFilter, countryFilter, companyFilter ) {
        fetch("http://localhost:3000/api/Products?filter=%7B%22where%22%3A%7B%22and%22%3A%5B%7B%22Name%22%3A%20%22" + nameFilter
                + "%22%7D%2C%7B%22Price%22%3A%20" + priceFilter
                + "%7D%2C%7B%22Specs%22%3A%20%22" + specsFilter 
                + "%22%7D%2C%7B%22SupplierInfo%22%3A%20%22" + supplierFilter 
                + "%22%7D%2C%7B%22MadeIn%22%3A%20%22" + countryFilter 
                + "%22%7D%2C%7B%22ProductionCompanyName%22%3A%20%22" + companyFilter 
                + "%22%7D%5D%7D%7D")
        .then(response=> {
            return response.json();
        })
        .then(response => {
            fetch('http://localhost:3000/api/Products/'+response[0].id, {
                method: 'DELETE',
                headers: {'content-type': 'application/json'},
            })
        })
    }

}
