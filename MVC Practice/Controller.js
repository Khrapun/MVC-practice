class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
        
        this.listStoreCreate()
        this.view.createNewStoreList(this.handleCreateNewStore)
        this.view.CreateProductsItem(this.handleCreateProductsItem)
        this.view.deleteStoreProduct(this.handleDeleteStoreProduct)
        this.view.searchSubStringUpdate(this.handleSearchSubString)
        this.view.syncUpdate(this.handleSyncUpdate)
    }

    /**
     * Handle sync update
     *
     * @param
     * @return
     * @private
     */

    handleSyncUpdate = () => {
        this.model.updateListStores().then(response => {
            this.view.loadStoreList(response);
            this.view.handleStore(this.handleEditProductList);
        });
    }

    /**
     * Handle search substring
     *
     * @param
     * @return
     * @private
     */

    handleSearchSubString = () => {
        this.model.updateListStores().then(response => {
            this.view.searchSubstringStores(response);
        });
    }
    
    /**
     * Create list store
     *
     * @param
     * @return
     * @private
     */

    listStoreCreate = e => {
        this.model.updateListStores().then(response => {
            this.view.loadStoreList(response);
            this.view.handleStore(this.handleEditProductList);
        });
    }
    
    /**
     * Handle edit product list
     *
     * @param {floor} floor 
     * @return
     * @private
     */

    handleEditProductList = floor => {
        this.model.getStore(floor).then(response => {
            this.view.setStore(response);
        })

        this.model.getProductDetails(floor).then(response => {
           this.view.setProduct(response);
           this.view.handleDeleteStore(this.handleDelete)
           this.view.openProductModal()
           this.view.setFilterListenerOK(this.handleSearchOk);
           this.view.setFilterListenerOutof(this.handleSearchOutof);
           this.view.setFilterListenerStorage(this.handleSearchStoreage);
           this.view.setFilterAll(this.handleAll);
           this.view.deleteOpenStoreProduct();
           this.view.sortListener()
        })
    }

    /**
     * Handle create product item
     *
     * @param
     * @return
     * @private
     */

    handleCreateProductsItem = product => {
        this.model.fetchPostProduct(product);
        this.view.entryProductHtml();
    }

    /**
     * Handle create new store
     *
     * @param {store} store
     * @return
     * @private
     */

    handleCreateNewStore = store => {
        this.model.fetchPostStore(store);
        this.view.setStoreDocument();
    }

    /**
     * Handle delete
     *
     * @param
     * @return
     * @private
     */

    handleDelete = e => {
        this.model.fetchDeleteStore();
        this.view.deleteStoreDocument();
    }

        /**
     * Handle seacrh ok
     *
     * @param {status} status
     * @return
     * @private
     */

    handleSearchOk = status => {
        this.model.fetchFiltres(status).then(response => {
            this.view.showFilterProducts(response)
            this.view.sortListener()
        })
    }

    /**
     * Handle search Out of stock
     *
     * @param {status} status
     * @return
     * @private
     */

    handleSearchOutof = status => {
        this.model.fetchFiltres(status).then(response => {
            this.view.showFilterProducts(response)
            this.view.sortListener()
        })
    }

    /**
     * Handle search storage
     *
     * @param {status} status
     * @return
     * @private
     */

    handleSearchStoreage = status => {
        this.model.fetchFiltres(status).then(response => {
            this.view.showFilterProducts(response)
            this.view.sortListener()
        })
    }

    /**
     * Handle all product
     *
     * @param {productsNow} productsNow
     * @return
     * @private
     */

    handleAll = productsNow => {
        this.view.showFilterProducts(productsNow)
        this.view.sortListener()
    }

    /**
     * Handle delete store product
     *
     * @param {filtres} filtres fitres for finding product
     * @return
     * @private
     */

    handleDeleteStoreProduct = (nameFilter, priceFilter, specsFilter, supplierFilter, countryFilter, companyFilter) =>{
        this.model.fetchProductDelete(nameFilter, priceFilter, specsFilter, supplierFilter, countryFilter, companyFilter)
    }

}       
