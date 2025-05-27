package app;

import app.Todo;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;
import com.mongodb.client.result.InsertOneResult;
import com.mongodb.client.result.UpdateResult;
import com.mongodb.client.result.DeleteResult;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class App2 {

    public static void main(String[] args) {
        MongoCollection<Todo> collection = Database.getCollection("todo", Todo.class);

        insertTodo(collection, "수업시간에 집중하기", "딴짓 그만");
        insertManyTodo(collection, "샘플", 3);

        // 테스트용 ObjectId로 교체
        updateTodo(collection, "666a63fe87e1b35d087be2d5", true);

        updateAllTodo(collection, false);

        // 삭제 테스트
        deleteTodo(collection, "666a63fe87e1b35d087be2d5");

        // 전체 조회
        selectAllTodo(collection);
    }

    private static void insertTodo(MongoCollection<Todo> collection, String title, String desc) {
        Todo todo = new Todo(null, title, desc, false);
        InsertOneResult result = collection.insertOne(todo);
        System.out.println("todo 추가 성공 ==> _id : " + result.getInsertedId());
    }

    private static void insertManyTodo(MongoCollection<Todo> collection, String str, int count) {
        List<Todo> todoList = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            Todo todo = new Todo(null, str + i, str + i + " 설명", false);
            todoList.add(todo);
        }
        collection.insertMany(todoList);
        System.out.println("샘플 데이터 추가 성공 : " + count + "건");
    }

    private static void updateTodo(MongoCollection<Todo> collection, String id, boolean done) {
        Bson query = Filters.eq("_id", new ObjectId(id));
        Bson update = Updates.set("done", done);
        UpdateResult result = collection.updateOne(query, update);

        if (result.getModifiedCount() == 0) {
            System.out.println("일치하는 _id를 가지는 문서가 없거나 수정 사항 없음");
            return;
        }
        System.out.println("===수정 성공===");
        selectTodo(collection, id);
    }

    private static void updateAllTodo(MongoCollection<Todo> collection, boolean done) {
        Bson query = Filters.empty(); // 조건 없음 = 전체 대상
        Bson update = Updates.set("done", done);
        UpdateResult result = collection.updateMany(query, update);

        if (result.getModifiedCount() == 0) {
            System.out.println("변경 사항 없음");
            return;
        }

        System.out.println("===일괄 수정 성공===");
        selectAllTodo(collection);
    }

    /**
     * 단일 Todo 조회 by ObjectId
     */
    private static void selectTodo(MongoCollection<Todo> collection, String id) {
        Todo todo = collection.find(Filters.eq("_id", new ObjectId(id))).first();
        if (todo != null) {
            System.out.println("조회 결과: " + todo);
        } else {
            System.out.println("해당 ID의 Todo 없음");
        }
    }

    /**
     * 전체 Todo 조회
     */
    private static void selectAllTodo(MongoCollection<Todo> collection) {
        List<Todo> todos = collection.find().into(new ArrayList<>());
        System.out.println("=== 전체 Todo 목록 ===");
        for (Todo todo : todos) {
            System.out.println(todo);
        }
    }

    /**
     * Todo 삭제
     */
    private static void deleteTodo(MongoCollection<Todo> collection, String id) {
        Bson query = Filters.eq("_id", new ObjectId(id));
        DeleteResult result = collection.deleteOne(query);
        
        if (result.getDeletedCount() == 0) {
            System.out.println("삭제할 Todo 없음");
        } else {
            System.out.println("Todo 삭제 성공");
        }
    }

}
