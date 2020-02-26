class View {
    constructor() {
        this.listStore = this.getElementId('stores-list')
        this.containerStoreDetails = this.getElementId('container-store-details')
        this.syncButton = this.getElementId('sync')
        this.searchButton = this.getElementId('search')
        this.deleteButton = this.getElementId('backspace')
        this.modalWindowShow = this.getElementId('window-modal')
        this.modalProduct = this.getElementId('store-product-modal')
        this.createStore = this.getElementId('create-store')
        this.cancelFormStore = this.getElementId('cancel-store-form')
        this.createNewStore = this.getElementId('create-new-store')
        this.createNewProduct = this.getElementId('createProduct')
        this.deleteStoreModal = this.getElementId('delete-store-modal')
        this.cancelDetailModal = this.getElementId('cancel-detail-form')
        this.deleteStoreDetailModal  = this.getElementId('delete-store-detail-modal')
        this.cancelDetailForm = this.getElementId('cancel-store-detail-form')
        this.loader = this.getElementId('loader')
        this.inputStores = this.getElementId('input-stores')

        this.outputStoresItemTemplate = '<li class="list-item list-item_left">'+
        '<div class="list-item__name">'+
            '<p class="item-name">{{Name}}</p>'+
            '<p class="location">{{Address}}</p>'+
             '</div>'+
            '<p class="list-item__score">{{FloorArea}}</p>'+
           '</li>'

       this.storeDetailsTemplate = '<div class="list-scroll list-scroll_right">'+
            '<div class="store-details store-details_header">'+
                '<h1 class="store-details__title header-topic">Store details</h1>'+
                '<div class="store-details__information">'+
                    '<div class="store-left-column">'+
                        '<p class="store-details__information__item"><span class="bold">Email:</span><a href="{{Email}}">{{Email}}</a></p>'+
                        '<p class="store-details__information__item"><span class="bold">Phone Number:</span><a href="tel:{{PhoneNumber}}">{{PhoneNumber}}</ a></p>'+
                        '<p class="store-details__information__item"><span class="bold">Address:</span><a href="{{Address}}">{{Address}}</a></p>'+
                    '</div>'+
                    '<div class="store-rigth-column">'+
                        '<p class="store-details__information__item" id="date">{{Established}}</p>'+
                        '<p class="store-details__information__item"><span class="bold">Floor Area:</span>{{FloorArea}}</p>'+
                    '</div>'+
                '</div>'+
                '<div class="store-details__filter">'+
                    '<p class="value" id="filter-value">0</p>'+
                    '<div class="filter" id="filter-ok">'+
                        '<i class="far fa-check-square"></i>'+
                        '<p class="store-details__information__item">ok</p>'+
                        '<p class="store-details__information__value">0</p>'+
                    '</div>'+
                    '<div class="filter" id="filter-storage">'+
                        '<i class="fas fa-exclamation-triangle"></i>'+
                        '<p class="store-details__information__item">storage</p>'+
                        '<p class="store-details__information__value">0</p>'+
                    '</div>'+
                    '<div class="filter" id="filter-stock">'+
                        '<i class="fas fa-exclamation-circle"></i>'+
                        '<p class="store-details__information__item">out of stock</p>'+
                        '<p class="store-details__information__value">0</p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<table class="table" id="table">'+
                '<caption class="table-header">'+
                    'Products'+
                    '<form class="form">'+
                        '<input class="input input-duration" placeholder="search" id="inputs">'+
                        '<a class="button" id="searchInTableButton"><i class="fas fa-search"></i></a>'+
                    '</form>'+
                '</caption>'+
                '<tr class="tr-topic">'+
                    '<th class="topic-name"><a href="#" class="sort"><i class="fas sort-product fa-sort"></i></a>Name</th>'+
                    '<th class="topic-price"><a href="#" class="sort"><i class="fas sort-product fa-sort"></i></a>Price</th>'+
                    '<th class="topic-specs column-topic"><a href="#" class="sort"><i class="fas sort-product fa-sort"></i></a>Specs</th>'+
                    '<th class="topic-info column-topic"><a href="#" class="sort"><i class="fas sort-product fa-sort"></i></a>Suppllerinfo</th>'+
                    '<th class="topic-country column-topic"><a href="#" class="sort"><i class="fas sort-product fa-sort"></i></a>CCountry of origin</th>'+
                    '<th class="topic-company column-topic"><a href="#" class="sort"><i class="fas sort-product fa-sort"></i></a>Prod.company</th>'+
                    '<th class="topic-raiting column-topic"><a href="#" class="sort"><i class="fas sort-product fa-sort"></i></a>Raiting</th>'+
                    '<th class="column-topic"> </th>'+
                    '<th class="column-topic"> </th>'+
                '</tr>'

                this.tableFooter = '</table>'+
                '<div class="list-scroll__footer footer-right">'+
                    '<a class="button-create button" id = "create-product">+ Create</a>'+
                    '<a class="button-delete button" id = "delete-store"><i class="far fa-trash-alt"></i> Delete</a>'+
                '</div>'+
                '</div>'

                this.searchHead =   '<caption class="table-header">'+
                'Products'+
                '<form class="form">'+
                '<input class="input input-duration" placeholder="search" id="inputs">'+
                '<a class="button" id="searchInTableButton"><i class="fas fa-search"></i></a>'+
                '</form>'+
                '</caption>'+
                '<tr class="tr-topic">'+
                    '<th class="topic-name"><a href="#" class="sort"><i class="fas sort-product fa-sort"></i></a>Name</th>'+
                    '<th class="topic-price"><a href="#" class="sort"><i class="fas sort-product fa-sort"></i></a>Price</th>'+
                    '<th class="topic-specs column-topic"><a href="#" class="sort"><i class="fas sort-product fa-sort"></i></a>Specs</th>'+
                    '<th class="topic-info column-topic"><a href="#" class="sort"><i class="fas sort-product fa-sort"></i></a>Suppllerinfo</th>'+
                    '<th class="topic-country column-topic"><a href="#" class="sort"><i class="fas sort-product fa-sort"></i></a>CCountry of origin</th>'+
                    '<th class="topic-company column-topic"><a href="#" class="sort"><i class="fas sort-product fa-sort"></i></a>Prod.company</th>'+
                    '<th class="topic-raiting column-topic"><a href="#" class="sort"><i class="fas sort-product fa-sort"></i></a>Raiting</th>'+
                    '<th class="column-topic"> </th>'+
                    '<th class="column-topic"> </th>'+
                '</tr>'

                this.storesTableItems = '<tr class="tr-item">'+
                        '<td class="cell cell_name">'+
                        '<span class="bold">{{Name}}</span>'+
                        '</td>'+
                        '<td class="cell cell_price">'+
                            '{{Price}}'+
                        'USD</td>'+
                        '<td class="cell cell_specs">'+
                            '{{Specs}}'+
                        '</td>'+
                        '<td class="cell cell_info">'+
                            '{{SupplierInfo}}'+
                        '</td>'+
                        '<td class="cell cell_country">'+
                            '{{MadeIn}}'+
                        '</td>'+
                        '<td class="scell cell_company">'+
                        '{{ProductionCompanyName}}'+
                        '</td>'+
                        '<td class="cell cell_raiting">'+
                            '<ul class="rate">'+
                                '<li class="star"></li>'+
                                '<li class="star"></li>'+
                                '<li class="star"></li>'+
                                '<li class="star"></li>'+
                                '<li class="star"></li>'+
                            '</ul>'+
                        '</td>'+
                        '<td class="cell">'+
                            '>'+
                        '</td>'+
                        '<td class="cell">'+
                            '<i class="far fa-times-circle delete-products-item"></i>'+
                        '</td>'+
                    '</tr>'

                this.starTemplate = '<li class="star"></li>'+
                '<li class="star"></li>'+
                '<li class="star"></li>'+
                '<li class="star"></li>'

                this.storeNoSelectded ='<div class="selected-header">'+
                            '<h1 class="header-topic">Store is not selected</h1>'+
                        '</div>'+
                        '<div class="selected-main">'+
                            '<i class="fas fa-store-alt"></i>'+
                            '<p class="selected-main__discriotion-title">'+
                                '<span class="bold">The store is not selected</span><br>'+
                            '</p>'+
                            '<p class="selected-main__discriotion">please select the store to proceed</p>'+
                        '</div>'

            this.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ]
            this.storesKyesSearch = ['Name', 'FloorArea', 'Address'];
            this.raitingProduct = []
            this.htmltemlate = ''
            this.floor = ''
            this.displayModalCreateStore()
            this.closeModalCreateStore()
            this.closeModalProductDelete()
            this.allListener = 0
            this.amountOk = 0
            this.amountStorage = 0
            this.amountStock = 0
            this.storeSet = {}
            this.currentItem
            this.productSet = {}
            this.productsNow = []
            this.storesNow = []
            this.nameFilter
            this.priceFilter
            this.specsFilter
            this.supplierFilter
            this.countryFilter
            this.companyFilter
            this.product
            this.sortCriterion
            this.sortRoute
            this.syncUpdate()   
            this.delteUpdate()
            this.inputOn()
            this.cancelDetailModalForm()
    }

       /**
     * Close modal form detail
     *
     * @param  {obj}  Data point
     * @return {funct}   Tween function
     * @private
     */

    cancelDetailModalForm() {
        this.cancelDetailModal.addEventListener('click', () => {
            document.getElementById('store-product-modal').style.display = "none";  
        })
    };

    inputOn() {
        this.inputStores.oninput = () => {
            if(this.inputStores.value !== '') {
                this.deleteButton.style.display = 'block';
                this.searchButton.style.paddingLeft = '0.9vw';
            }
            else {
                this.deleteButton.style.display = 'none'; 
                this.searchButton.style.paddingLeft = '1.35vw';
            }

        };

        this.inputStores.onfocus= () => {
            this.syncButton.style.display = 'none';
            if (this.inputStores.value === '') {
                this.searchButton.style.paddingLeft = '1.35vw';
            }
            else {
                this.searchButton.style.paddingLeft = '0.9vw';
            }
        };

        this.inputStores.onblur = () => {
            if (this.inputStores.value === '') {
                this.syncButton.style.display = 'block';
                this.searchButton.style.paddingLeft = '0vw';
                this.deleteButton.style.display = 'none'; 
            }
            else {
                this.searchButton.style.paddingLeft = '0.9vw';
            }
        };
    }

       /**
     * Update store list
     *
     * @param  {obj} handle  function for uploading stores list
     * @return {funct}
     * @private
     */

    syncUpdate(handle) {
        this.syncButton.addEventListener('click', () => {
            handle();
        })
    }

       /**
     * Search substring in stores list
     *
     * @param  {obj} handle  function for uploading stores list
     * @return {funct}
     * @private
     */

    searchSubStringUpdate(handle) {
        this.searchButton.addEventListener('click', () => {
            handle();
        })
    }

    searchSubstringStores (arrayStores) {
        let substring = this.inputStores.value;
        let html = '';
        arrayStores.forEach((item, index, array) => {
            let isPushedFlag = false
            Object.keys(item).forEach((key) => {
                if(((item[key]+'').toLowerCase()).indexOf((substring+'').toLowerCase()) === 0 && this.storesKyesSearch.indexOf(key+'') > -1 ) {  
                    isPushedFlag = true
                };
            });
            if (isPushedFlag) {
                html += Mustache.to_html(this.outputStoresItemTemplate, item);
            };
        });
        this.listStore.innerHTML = html;
        html = '';
    };

           /**
     * Update input
     *
     * @param  {obj}
     * @return {funct}
     * @private
     */

    delteUpdate() {
        this.deleteButton.addEventListener('click', () => {
            this.inputStores.value = '';
        })
    }
 
       /**
     * Support for get Id
     *
     * @param  {obj} handle  item
     * @return {funct}
     * @private
     */

    getElementId(id) {
        const element = document.getElementById(id);
        return element;
    }

           /**
     * Update html stores list
     *
     * @param  {obj} handle  array stores
     * @return {funct}
     * @private
     */

    loadStoreList(arrayStores) {
        this.storesNow = arrayStores;
        arrayStores.forEach((item, index, array) => {
            this.htmltemlate += Mustache.to_html(this.outputStoresItemTemplate, item);
        });
        this.listStore.innerHTML = this.htmltemlate;
        this.htmltemlate = '';
    }

           /**
     * Add handle to store in list
     *
     * @param  {obj} handle  function for get element store
     * @return {funct}
     * @private
     */

    handleStore(handle) {
        document.querySelectorAll('.list-item').forEach(item => {
            item.addEventListener('click', event => {
                this.currentItem = item;
                this.floor = event.currentTarget.querySelectorAll('.list-item__score')[0].innerText-0;
                handle(this.floor);
            })
        })
    }

    /**
     * Add new store to html
     *
     * @param  {obj} store array store
     * @return {funct}
     * @private
     */
    
    setStore(store) {
        this.htmltemlate = Mustache.to_html(this.storeDetailsTemplate, store[0]);
    }

    /**
     * Add new product to html
     *
     * @param  {obj} arrayProduct array product
     * @return {funct}
     * @private
     */

    setProduct(arrayProduct) {
        this.productsNow = arrayProduct;
        arrayProduct.forEach((item, index, array) => {
            this.htmltemlate += Mustache.to_html(this.storesTableItems, item);
            this.getFiltresValue(item);
            this.raitingProduct.push(item.Rating)
        });
        this.containerStoreDetails.innerHTML = this.htmltemlate+this.tableFooter;
        this.htmltemlate = ''
        this.amountAll = arrayProduct.length;
        this.dateConversion(arrayProduct.length)
        this.getFilters();
        this.setFiltres();
        this.setStar(this.raitingProduct);
    };

    /**
     * Get and set rout of sort
     *
     * @param  {obj} i sort value
     * @return {funct}
     * @private
     */

    getSortRoute(i) {
        switch (i.classList[2]+'') {
            case 'fa-sort':
                i.classList.remove("fa-sort");
                i.classList.add("fa-sort-amount-up-alt");
                this.sortRoute = 'up';
                break;
            case 'fa-sort-amount-up-alt':
                i.classList.remove("fa-sort-amount-up-alt");
                i.classList.add("fa-sort-amount-down");
                this.sortRoute = 'down';
                break;
            case 'fa-sort-amount-down':
                i.classList.remove("fa-sort-amount-down");
                i.classList.add("fa-sort-amount-up-alt");
                this.sortRoute = 'up';
                break;
            default: break;
        }
    };

    /**
     * Sort option selection
     *
     * @param  {obj} indexCtiterion Index criterion
     * @return {funct}
     * @private
     */

    sortPositionCase(indexCtiterion) {
        switch (indexCtiterion+'') {
            case '0':
                this.sortCriterion = 'Name';
                break;
            case '1':
                this.sortCriterion = 'Price';
                break;
            case '2':
                this.sortCriterion = 'Specs';
                break;
            case '3':
                this.sortCriterion = 'SuppllerInfo';
                break;
            case '4':
                this.sortCriterion = 'MadeIn';
                break;
            case '5':
                this.sortCriterion = 'ProductionCompanyName';
                break;
            case '6':
                this.sortCriterion = 'Rating';
                break;
            default: break;
        }
    };

    /**
     * Sorting
     *
     * @param  {obj} arrayProductSorted Array for sorted
     * @return {funct}
     * @private
     */

    setSortRoute(arrayProductSorted) {
        this.raitingProduct = [];
        let table = document.getElementById('table');
        let html = '';
        if(this.sortRoute === 'up') {
            arrayProductSorted.forEach((item, index, array) => {
                this.raitingProduct.push(item.Rating)
                html += Mustache.to_html(this.storesTableItems, item);
            });
            console.log(this.raitingProduct)
        }
        else {
            arrayProductSorted.reverse().forEach((item, index, array) => {
                this.raitingProduct.push(item.Rating)
                html += Mustache.to_html(this.storesTableItems, item);
            });
        }
        this.deleteProductNoSort();
        table.innerHTML = table.innerHTML + html;
        html = '';
        this.sortListener()
    };

    /**
     * Remove old products
     *
     * @param  {obj}
     * @return {funct}
     * @private
     */

    deleteProductNoSort() {
        document.getElementById('table').querySelectorAll('.tr-item').forEach(item => {
            item.remove();
        });
    };

    /**
     * Add listener for sort element
     *
     * @param  {obj}
     * @return {funct}
     * @private
     */

    sortListener() {
        document.querySelectorAll('.sort-product').forEach((item, index, array) => {
            item.addEventListener('click', () => {
                this.sortPositionCase(index);
                console.log(this.criterion)
                this.sortProduct(this.productsNow, this.sortCriterion)
                this.getSortRoute(item);
                this.setSortRoute(this.productsNow);
                this.setStar(this.raitingProduct);
            })
        });
    };

    /**
     * Sorting product
     *
     * @param  {array} array Array products and criterion
     * @return {funct}
     * @private
     */

    sortProduct(array, criterion) {
        array.sort((a,b) => (a[criterion] > b[criterion]) ? 1 : ((b[criterion] > a[criterion]) ? -1 : 0))
        console.log(array)
    };

    /**
     * Star set
     *
     * @param  {array} array Array raiting product
     * @return {funct}
     * @private
     */

    setStar(raiting) {
        let numberItems = 0;
        document.querySelectorAll('.rate').forEach((item, index, array) => {
            item.childNodes.forEach((item, index, array) => {
                if(index < raiting[numberItems]){
                    item.style.color = '#dfa10e';
                }    
            });
            numberItems++;
        });
        numberItems = 0;
        this.raitingProduct = [];
    };

    /**
     * Get filtres value
     *
     * @param  {array} array Array products
     * @return {funct}
     * @private
     */

    getFiltresValue(product) {
        switch (product.Status) {
            case 'STORAGE':
                this.amountStorage += 1;
                break;
            case 'OUT_OF_STOCK':
                this.amountStock +=1;
                break;
            case 'OK':
                this.amountOk += 1;
                break;
            default: break;
        }
    };

    /**
     * Reset filtres
     *
     * @param
     * @return
     * @private
     */

    resetFilter() {
        this.amountOk = 0;
        this.amountStock = 0;
        this.amountStorage = 0;
    };

    /**
     * Get filtres
     *
     * @param
     * @return
     * @private
     */

    getFilters() {
        this.allListenerListener = document.getElementById('filter-value');
        this.allListenerokListener = document.getElementById('filter-ok');
        this.allListenerstorageListener = document.getElementById('filter-storage');
        this.allListenerstockListener = document.getElementById('filter-stock');
    };

    /**
     * Set filtres
     *
     * @param
     * @return
     * @private
     */

    setFiltres() {
        this.allListenerListener.innerText = this.amountAll;
        this.allListenerokListener.querySelectorAll('p')[1].innerText = this.amountOk;
        this.allListenerstorageListener.querySelectorAll('p')[1].innerText = this.amountStorage;
        this.allListenerstockListener.querySelectorAll('p')[1].innerText = this.amountStock;
        this.resetFilter()
    };

    /**
     * Set filtres
     *
     * @param  {funct} handle Function for get filtres
     * @return {funct}
     * @private
     */

    setFilterAll(handle) {
        let prodArray = this.productsNow
        document.getElementById('filter-value').addEventListener('click', function() {
            handle(prodArray)
        })
    }

    /**
     * Set listener for ok filtre
     *
     * @param  {funct} handle 
     * @return {funct}
     * @private
     */

    setFilterListenerOK(handle) {
        document.getElementById('filter-ok').addEventListener('click', function() {
            handle('OK');
        });
    };

    /**
     * Set listener for ok filtre
     *
     * @param  {funct} handle 
     * @return {funct}
     * @private
     */

    setFilterListenerStorage(handle) {
        document.getElementById('filter-storage').addEventListener('click', function() {
            handle('STORAGE');
        });
    };

    /**
     * Set listener for Out of stock filter
     *
     * @param  {funct} handle 
     * @return {funct}
     * @private
     */

    setFilterListenerOutof(handle) {
        document.getElementById('filter-stock').addEventListener('click', function() {
            handle('OUT_OF_STOCK');
        });
    };

    /**
     * Show filtered products
     *
     * @param  {funct} product
     * @return {funct}
     * @private
     */

    showFilterProducts(product) {
        let html = '';
        this.raitingProduct = [];
        product.forEach((item, index, array) => {
            this.raitingProduct.push(item.Rating)
            html += Mustache.to_html(this.storesTableItems, item);
        });
        document.getElementById('table').innerHTML = this.searchHead + html;
        this.setStar(this.raitingProduct);
        html = '';
    };

    /**
     * Conversion date
     *
     * @param
     * @return
     * @private
     */

    dateConversion() {
        let dateEstablished = new Date(document.getElementById('date').innerHTML);
        dateEstablished = this.monthNames[dateEstablished.getMonth()] + ' '  + dateEstablished.getDate() + ',' + dateEstablished.getFullYear(); 
        document.getElementById('date').innerText = dateEstablished+'';
    };

    /**
     * Display create store modal
     *
     * @param
     * @return
     * @private
     */

    displayModalCreateStore() {
        this.createStore.addEventListener('click', event => {
            this.modalWindowShow.style.display = "block";
        })
    }

    /**
     * Close crate store modal
     *
     * @param
     * @return
     * @private
     */

    closeModalCreateStore() {
        this.cancelFormStore.addEventListener('click', event => {
            this.modalWindowShow.style.display = "none";
        })
    }

    /**
     * Close delete product modal
     *
     * @param
     * @return
     * @private
     */

    closeModalProductDelete() {
        this.cancelDetailForm.addEventListener('click', () => {
            document.getElementById('delete-store-detail-modal').style.display = 'none';
        })
    }

    /**
     * Get product of form
     *
     * @param 
     * @return
     * @private
     */

    getProductOfForm() {
        this.productSet = {
            Name: document.getElementById('product-name').value,
            Price: document.getElementById('product-price').value,
            Photo: '',
            Specs: document.getElementById('product-specs').value,
            Rating: document.getElementById('product-rating').value,
            SupplierInfo: document.getElementById('product-supplier').value,
            MadeIn: document.getElementById('product-made').value,
            ProductionCompanyName: document.getElementById('product-company').value,
            Status: document.getElementById('product-status').value,
        };
    };

    /**
     * Get store of form
     *
     * @param  {funct} handle 
     * @return {funct}
     * @private
     */

    getStoreOfForm() {
        this.storeSet = {
            Name: document.getElementById('create-store-name').value,
            Email: document.getElementById('create-store-email').value,
            PhoneNumber: document.getElementById('create-store-phone').value,
            Address: document.getElementById('create-store-address').value,
            Established: document.getElementById('create-store-date').value,
            FloorArea: document.getElementById('create-store-floor').value
        };
    }

        /**
     * Create new store list
     *
     * @param  {funct} handle 
     * @return {funct}
     * @private
     */

    createNewStoreList(handle) {
        this.createNewStore.addEventListener('click', function() {
            this.storeSet = {
                Name: document.getElementById('create-store-name').value,
                Email: document.getElementById('create-store-email').value,
                PhoneNumber: document.getElementById('create-store-phone').value,
                Address: document.getElementById('create-store-address').value,
                Established: document.getElementById('create-store-date').value,
                FloorArea: document.getElementById('create-store-floor').value
            };
            handle(this.storeSet)
        });
    }

    /**
     * Delete store 
     *
     * @param  {funct} handle 
     * @return {funct}
     * @private
     */

    handleDeleteStore(handle) {
        document.getElementById('delete-store').addEventListener('click', function() {
            handle();
        })
    }

    /**
     * Delete open store product
     *
     * @param
     * @return
     * @private
     */

    deleteOpenStoreProduct() {
        document.querySelectorAll('.tr-item').forEach((item, index, array)=> {
            item.childNodes[8].addEventListener('click', () => {
                this.setProductFiltres(item);
                this.product = item;
                document.getElementById('delete-store-detail-modal').style.display = 'block';
            })
        })
    }

    /**
     * Delete store product
     *
     * @param  {funct} handle 
     * @return {funct}
     * @private
     */

    deleteStoreProduct(handle) {
        document.getElementById('delete-store-detail-ok').addEventListener('click', () => {
            handle(this.nameFilter, this.priceFilter, this.specsFilter, this.supplierFilter, this.countryFilter, this.companyFilter)
            document.getElementById('delete-store-detail-modal').style.display = 'none';
            this.product.remove();
        })
    }

    /**
     * Set product filtres
     *
     * @param  {funct} handle 
     * @return {funct}
     * @private
     */

    setProductFiltres(product) {
        this.nameFilter = product.childNodes[0].innerText;
        this.priceFilter = product.childNodes[1].innerText.replace(/\D+/g,"")-0;
        this.specsFilter = product.childNodes[2].innerText;
        this.supplierFilter = product.childNodes[3].innerText;
        this.countryFilter = product.childNodes[4].innerText;
        this.companyFilter = product.childNodes[5].innerText; 
    }

    /**
     * Delete store in document
     *
     * @param  {funct} handle 
     * @return {funct}
     * @private
     */

    deleteStoreDocument() {
        this.containerStoreDetails.innerHTML = this.storeNoSelectded;
        document.querySelector('ul').removeChild(this.currentItem);
        this.modalProduct.style.display = "none";
    }

    /**
     * Set store in document
     *
     * @param  {funct} handle 
     * @return {funct}
     * @private
     */

    setStoreDocument() {
        this.getStoreOfForm()
        document.getElementById('stores-list').innerHTML += Mustache.to_html(this.outputStoresItemTemplate, this.storeSet);
        this.containerStoreDetails.innerHTML = Mustache.to_html(this.storeDetailsTemplate+this.tableFooter, this.storeSet);
        this.modalWindowShow.style.display = "none";
    }

    /**
     * Handle create store
     *
     * @param  {funct} handle 
     * @return {funct}
     * @private
     */

    handleStoreCreate(handle) {
        document.querySelectorAll('.list-item').forEach(item => {
            item.addEventListener('click', event => {
                this.floor = event.currentTarget.querySelectorAll('.list-item__score')[0].innerText-0;
                handle(this.floor)
            })
        })
    }

    /**
     * Create product item
     *
     * @param  {funct} handle 
     * @return {funct}
     * @private
     */

    CreateProductsItem (handle) {
        this.createNewProduct.addEventListener('click', function() {
            this.productSet = {
                Name: document.getElementById('product-name').value,
                Price: document.getElementById('product-price').value,
                Photo: '',
                Specs: document.getElementById('product-specs').value,
                Rating: document.getElementById('product-rating').value,
                SupplierInfo: document.getElementById('product-supplier').value,
                MadeIn: document.getElementById('product-made').value,
                ProductionCompanyName: document.getElementById('product-company').value,
                Status: document.getElementById('product-status').value,
            };
            handle(this.productSet)
            document.getElementById('store-product-modal').style.display = "none";
        })
    }

    /**
     * Open product modal
     *
     * @param
     * @return
     * @private
     */

    openProductModal() {
        document.getElementById('create-product').addEventListener('click', function() {
            document.getElementById('store-product-modal').style.display = "block";
        })
    }

    /**
     * Set product to document
     *
     * @param
     * @return
     * @private
     */

    entryProductHtml() {
        let table = document.getElementById('table');
        this.getProductOfForm();
        table.innerHTML = table.innerHTML + Mustache.to_html(this.storesTableItems, this.productSet);
        this.modalProduct.style.display = "none";
    }

}