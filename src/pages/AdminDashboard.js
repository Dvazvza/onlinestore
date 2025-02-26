import React, { useState } from 'react';
import "./AdminDashboard.css";

const SidebarInterfaces = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const dummyProducts = [
    { id: 1, name: 'Smartphone', price: 4999, stock: 23, category: 'Électronique' },
    { id: 2, name: 'Laptop', price: 8500, stock: 15, category: 'Électronique' },
  ];
  const dummyOrders = [
    { id: 101, customer: 'Ahmed Alami', date: '25/02/2025', total: 5898, status: 'Livrée' },
    { id: 102, customer: 'Fatima Benani', date: '24/02/2025', total: 8500, status: 'En cours' },
  ];
  const dummyCustomers = [
    { id: 1, name: 'Ahmed Alami', email: 'ahmed.alami@email.com', phone: '0661234567', orders: 3, lastOrder: '25/02/2025' },
    { id: 2, name: 'Fatima Benani', email: 'fatima.benani@email.com', phone: '0662345678', orders: 1, lastOrder: '24/02/2025' },
  ];
  const dummyReports = [
    { id: 1, title: 'Ventes mensuelles', period: 'Février 2025', generated: '25/02/2025', type: 'Ventes' },
    { id: 2, title: 'Performance produits', period: 'Janvier-Février 2025', generated: '24/02/2025', type: 'Produits' },
  ];
  
  const dummySettings = [
    { id: 1, name: 'Général', description: 'Paramètres généraux du magasin' },
    { id: 2, name: 'Paiement', description: 'Options de paiement et passerelles' },
  ];
  // Statistiques globales
  const stats = {
    totalProducts: 5,
    totalOrders: 5,
    totalRevenue: 25194,
    totalCustomers: 5
  };
  // Rendu conditionnel pour chaque section
  const renderSection = () => {
    switch(activeSection) {
      case 'dashboard':
        return (
          <div>
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-icon products-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="8" x2="8" y2="8"></line>
                    <line x1="16" y1="16" x2="8" y2="16"></line>
                    <line x1="12" y1="3" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Total Produits</span>
                  <span className="stat-value">{stats.totalProducts}</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon orders-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Total Commandes</span>
                  <span className="stat-value">{stats.totalOrders}</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon customers-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Total Clients</span>
                  <span className="stat-value">{stats.totalCustomers}</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon revenue-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Total Revenus</span>
                  <span className="stat-value">{stats.totalRevenue.toLocaleString()} DH</span>
                </div>
              </div>
            </div>
            <div className="table-section">
              <h2 className="section-title">Produits Récents</h2>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nom</th>
                      <th>Prix</th>
                      <th>Stock</th>
                      <th>Catégorie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyProducts.map((product) => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price} DH</td>
                        <td>{product.stock}</td>
                        <td>{product.category}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="table-section">
              <h2 className="section-title">Commandes Récentes</h2>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Client</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyOrders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.date}</td>
                        <td>{order.total} DH</td>
                        <td>
                          <span className="status-badge">
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'products':
        return (
          <div>
            <div className="dashboard-header">
              <h1>Gestion des Produits</h1>
            </div>
            <div className="table-section">
              <div className="section-header">
                <h2 className="section-title">Liste des Produits</h2>
                <button className="btn btn-primary">Ajouter un Produit</button>
              </div>
              <div className="filters">
                <input type="text" placeholder="Rechercher un produit..." className="search-input" />
                <select className="filter-select">
                  <option value="">Toutes les catégories</option>
                  <option value="Électronique">Électronique</option>
                  <option value="Accessoires">Accessoires</option>
                  <option value="Wearables">Wearables</option>
                  <option value="Gaming">Gaming</option>
                </select>
                <select className="filter-select">
                  <option value="">Trier par</option>
                  <option value="name-asc">Nom (A-Z)</option>
                  <option value="name-desc">Nom (Z-A)</option>
                  <option value="price-asc">Prix (croissant)</option>
                  <option value="price-desc">Prix (décroissant)</option>
                  <option value="stock-asc">Stock (croissant)</option>
                  <option value="stock-desc">Stock (décroissant)</option>
                </select>
              </div>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nom</th>
                      <th>Prix</th>
                      <th>Stock</th>
                      <th>Catégorie</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyProducts.map((product) => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price} DH</td>
                        <td>{product.stock}</td>
                        <td>{product.category}</td>
                        <td>
                          <div className="action-buttons">
                            <button className="btn-icon btn-edit">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </button>
                            <button className="btn-icon btn-delete">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="pagination">
                <button className="btn-page">Précédent</button>
                <div className="page-numbers">
                  <button className="btn-page active">1</button>
                  <button className="btn-page">2</button>
                  <button className="btn-page">3</button>
                </div>
                <button className="btn-page">Suivant</button>
              </div>
            </div>
          </div>
        );
      case 'orders':
        return (
          <div>
            <div className="dashboard-header">
              <h1>Gestion des Commandes</h1>
            </div>
            
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-icon orders-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Commandes Totales</span>
                  <span className="stat-value">{stats.totalOrders}</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon products-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">En attente</span>
                  <span className="stat-value">1</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon customers-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">En cours</span>
                  <span className="stat-value">1</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon revenue-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Livrées</span>
                  <span className="stat-value">2</span>
                </div>
              </div>
            </div>
            
            <div className="table-section">
              <div className="section-header">
                <h2 className="section-title">Liste des Commandes</h2>
                <div className="filters">
                  <input type="text" placeholder="Rechercher une commande..." className="search-input" />
                  <select className="filter-select">
                    <option value="">Tous les statuts</option>
                    <option value="Livrée">Livrée</option>
                    <option value="En cours">En cours</option>
                    <option value="En attente">En attente</option>
                    <option value="Confirmée">Confirmée</option>
                  </select>
                  <input type="date" className="date-filter" />
                </div>
              </div>
              
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Client</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Statut</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyOrders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.date}</td>
                        <td>{order.total} DH</td>
                        <td>
                          <span className="status-badge">
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button className="btn-icon btn-view">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </button>
                            <button className="btn-icon btn-edit">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="pagination">
                <button className="btn-page">Précédent</button>
                <div className="page-numbers">
                  <button className="btn-page active">1</button>
                  <button className="btn-page">2</button>
                  <button className="btn-page">3</button>
                </div>
                <button className="btn-page">Suivant</button>
              </div>
            </div>
          </div>
        );
      
      case 'customers':
        return (
          <div>
            <div className="dashboard-header">
              <h1>Gestion des Clients</h1>
            </div>
            
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-icon customers-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Total Clients</span>
                  <span className="stat-value">{stats.totalCustomers}</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon revenue-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Nouveaux Clients (Mois)</span>
                  <span className="stat-value">3</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon orders-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Valeur Moyenne</span>
                  <span className="stat-value">5038 DH</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon products-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Commandes/Client</span>
                  <span className="stat-value">1.6</span>
                </div>
              </div>
            </div>
            <div className="table-section">
              <div className="section-header">
                <h2 className="section-title">Liste des Clients</h2>
                <div className="filters">
                  <input type="text" placeholder="Rechercher un client..." className="search-input" />
                  <button className="btn btn-primary">Ajouter un Client</button>
                </div>
              </div>
              
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Téléphone</th>
                      <th>Commandes</th>
                      <th>Dernière Commande</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyCustomers.map((customer) => (
                      <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.orders}</td>
                        <td>{customer.lastOrder}</td>
                        <td>
                          <div className="action-buttons">
                            <button className="btn-icon btn-view">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </button>
                            <button className="btn-icon btn-edit">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </button>
                            <button className="btn-icon btn-delete">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="pagination">
                <button className="btn-page">Précédent</button>
                <div className="page-numbers">
                  <button className="btn-page active">1</button>
                  <button className="btn-page">2</button>
                  <button className="btn-page">3</button>
                </div>
                <button className="btn-page">Suivant</button>
              </div>
            </div>
          </div>
        );
      
      case 'reports':
        return (
          <div>
            <div className="dashboard-header">
              <h1>Rapports & Analyses</h1>
            </div>
            
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-icon products-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Total Rapports</span>
                  <span className="stat-value">{dummyReports.length}</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon revenue-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Ventes ce mois</span>
                  <span className="stat-value">15 397 DH</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon customers-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Nouveaux clients</span>
                  <span className="stat-value">3</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon orders-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div className="stat-details">
                  <span className="stat-title">Taux de conversion</span>
                  <span className="stat-value">3.2%</span>
                </div>
              </div>
            </div>
            
            <div className="reports-grid">
              <div className="report-card">
                <h3>Performance des ventes</h3>
                <div className="chart-container">
                  <div className="placeholder-chart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="report-actions">
                  <button className="btn btn-sm">Télécharger PDF</button>
                  <button className="btn btn-sm">Voir détails</button>
                </div>
              </div>
              
              <div className="report-card">
                <h3>Répartition par catégorie</h3>
                <div className="chart-container">
                  <div className="placeholder-chart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a10 10 0 0 1 10 10"></path>
                      <path d="M12 12L2.5 7.5"></path>
                      <path d="M12 12l5 7.5"></path>
                    </svg>
                  </div>
                </div>
                <div className="report-actions">
                  <button className="btn btn-sm">Télécharger PDF</button>
                  <button className="btn btn-sm">Voir détails</button>
                </div>
              </div>
              
              <div className="report-card">
                <h3>Analyse de cohorte clients</h3>
                <div className="chart-container">
                  <div className="placeholder-chart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <rect x="7" y="7" width="3" height="3"></rect>
                      <rect x="14" y="7" width="3" height="3"></rect>
                      <rect x="7" y="14" width="3" height="3"></rect>
                      <rect x="14" y="14" width="3" height="3"></rect>
                    </svg>
                  </div>
                </div>
                <div className="report-actions">
                  <button className="btn btn-sm">Télécharger PDF</button>
                  <button className="btn btn-sm">Voir détails</button>
                </div>
              </div>
              
              <div className="report-card">
                <h3>Prévisions ventes (30 jours)</h3>
                <div className="chart-container">
                  <div className="placeholder-chart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="20" x2="12" y2="10"></line>
                      <line x1="18" y1="20" x2="18" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="16"></line>
                    </svg>
                  </div>
                </div>
                <div className="report-actions">
                  <button className="btn btn-sm">Télécharger PDF</button>
                  <button className="btn btn-sm">Voir détails</button>
                </div>
              </div>
            </div>
            
            <div className="table-section">
              <div className="section-header">
                <h2 className="section-title">Rapports récents</h2>
                <button className="btn btn-primary">Générer un rapport</button>
              </div>
              
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Titre</th>
                      <th>Période</th>
                      <th>Généré le</th>
                      <th>Type</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyReports.map((report) => (
                      <tr key={report.id}>
                        <td>{report.id}</td>
                        <td>{report.title}</td>
                        <td>{report.period}</td>
                        <td>{report.generated}</td>
                        <td>{report.type}</td>
                        <td>
                          <div className="action-buttons">
                            <button className="btn-icon btn-view">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </button>
                            <button className="btn-icon btn-download">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div>
            <div className="dashboard-header">
              <h1>Paramètres</h1>
            </div>
            
            <div className="settings-container">
              {dummySettings.map((setting) => (
                <div key={setting.id} className="setting-card">
                  <h3>{setting.name}</h3>
                  <p>{setting.description}</p>
                  <button className="btn btn-outline">Configurer</button>
                </div>
              ))}
            </div>
            
            <div className="system-info">
              <h2 className="section-title">Informations système</h2>
              <div className="info-card">
                <div className="info-row">
                  <span className="info-label">Dernière mise à jour</span>
                  <span className="info-value">25/02/2025</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Base de données</span>
                  <span className="info-value">Connectée</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Statut système</span>
                  <span className="info-value status-ok">Opérationnel</span>
                </div>
              </div>
              
              <div className="action-row">
                <button className="btn btn-primary">Sauvegarder les données</button>
                <button className="btn btn-outline">Vérifier les mises à jour</button>
                <button className="btn btn-danger">Réinitialiser le système</button>
              </div>
            </div>
          </div>
        );
        
      default:
        return <div>Sélectionnez une section dans le menu</div>;
    }
  };
  // Structure du composant principal avec sidebar
  return (
    <div className="admin-layout">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1 className="brand">ECommX</h1>
        </div>
        
        <nav className="sidebar-menu">
          <button 
            className={`menu-item ${activeSection === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveSection('dashboard')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>Tableau de bord</span>
          </button>
          
          <button 
            className={`menu-item ${activeSection === 'products' ? 'active' : ''}`}
            onClick={() => setActiveSection('products')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="8" x2="8" y2="8"></line>
              <line x1="16" y1="16" x2="8" y2="16"></line>
              <line x1="12" y1="3" x2="12" y2="21"></line>
            </svg>
            <span>Produits</span>
          </button>
          
          <button 
            className={`menu-item ${activeSection === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveSection('orders')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span>Commandes</span>
          </button>
          
          <button 
            className={`menu-item ${activeSection === 'customers' ? 'active' : ''}`}
            onClick={() => setActiveSection('customers')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>Clients</span>
          </button>
          
          <button 
            className={`menu-item ${activeSection === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveSection('reports')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
              <line x1="3" y1="20" x2="21" y2="20"></line>
            </svg>
            <span>Rapports</span>
          </button>
          
          <button 
            className={`menu-item ${activeSection === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveSection('settings')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
            <span>Paramètres</span>
          </button>
        </nav>
        
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">
              <img src="https://i.pravatar.cc/40" alt="Avatar utilisateur" />
            </div>
            <div className="user-details">
              <span className="user-name">Admin</span>
              <span className="user-role">Administrateur</span>
            </div>
          </div>
          
          <button className="btn-logout">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span>Déconnexion</span>
          </button>
        </div>
      </div>
      
      <div className="content-area">
        <header className="main-header">
          <div className="header-left">
            <button className="btn-menu-toggle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            
            <div className="search-container">
              <input type="text" placeholder="Rechercher..." className="search-input" />
              <button className="btn-search">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="header-right">
            <button className="header-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span className="badge">3</span>
            </button>
            
            <button className="header-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span className="badge">5</span>
            </button>
            
            <button className="header-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </button>
          </div>
        </header>
        <main className="main-content">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};
export default SidebarInterfaces;