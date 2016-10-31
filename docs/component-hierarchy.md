##Component Hierarchy

* **App**
  * **Authentication**
    * NewUserForm
    * NewSessionForm
  * ** Dashboard **
    * RouteIndex
      * RouteIndexItem**
        * **RouteDetail
    * **CreateRoute**
      * CreateRouteForm
        * CreateRouteDetail
        * CreateRouteMap
      * **UserDetail
      * UserDetail
      * FriendDetail

## Routes
* **component:** `App` **path:** `/`    
  * **component:** `Authentication` **path:** none
  * **component:** `Dashboard` **path:** none
    * **component:** `RouteIndex` **path:** `routes`
      * **component:** `RouteDetail` **path:** `routes/:route_id`
    * **component:**  `CreateRoute` **path:** `routes/:route_id`
    * **component:** `UserDetail` **path:** `user`
