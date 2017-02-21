/** interfaceが定義可能 **/
interface Searcher<T> {
     /**
      * @param condition 検索条件
      * @returns promise Promiseオブジェクト
      */
      /** ジェネリクス(T)が使えます **/
     (condition: T): Promise<{}>;
}
export default Searcher