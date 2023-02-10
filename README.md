<div align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

# Chinese Proverbs API

| HTTP Method |      Endpoint       |         What it does          |
| :---------: | :-----------------: | :---------------------------: |
|    POST     |    api/proverbs/    | adds new proverb to database  |
|     GET     |  api/proverbs/all   |     returns all proverbs      |
|     GET     | api/proverbs/random |    returns random proverb     |
|     PUT     |  api/proverbs/:id   |        updates proverb        |
|   DELETE    |  api/proverbs/:id   | deletes proverb from database |

<br/>

Currently supported query string parameters:

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| page      | Returns a paginated set.                       |
| limit     | The maximum amount of proverbs to be returned. |

<br/>

Example:

```bash
📃  First page showing 10 proverbs
https://chinese-proverbs.onrender/api/proverbs?page=1&limit=10
```

## JSON Data Model Example

```json
{
  "proverb": "难得糊涂。",
  "pinyin": "Nán dé hú tu",
  "translation": "Ignorance is bliss.",
  "_id": "63e69b9d10b169bf8d7ee994",
  "createdAt": "2023-02-10T19:31:41.995Z",
  "updatedAt": "2023-02-10T19:31:41.995Z",
  "__v": 0
}
```

<br/>

## Reference

`proverb`: Proverb in Mandarin<br>
`pinyin`: Proverb romanization<br>
`translation`: Proverb in English<br>

<br/>

## 🚀 Quick start

1.  **Clone the repository.**

    ```shell
    git clone
    ```

2.  **Install dependencies.**

    ```shell
    npm install
    ```

3.  **Start the development server.**

    ```shell
    npm start
    ```
