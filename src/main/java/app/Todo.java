// Todo.java
package app;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;

@AllArgsConstructor
@NoArgsConstructor
@Data


public class Todo {
    private ObjectId id;
    private String title;
    private String description;
    private boolean done;
//    private String desc;

}
