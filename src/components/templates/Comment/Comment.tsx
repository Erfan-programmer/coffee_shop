import { FaRegStar, FaStar } from "react-icons/fa";

import styles from "./comment.module.css";
type CommentType = {
  username: string;
  email: string;
  body: string;
  score: number;
  date: string;
};
const Comment = ({ comment }: any) => {
  return (
    <section className={styles.comment}>
      <div>
        <div className={styles.main_details}>
          <div className="flex flex-col justify-center items-start">
            <div className="flex justify-center items-center gap-2">
              <div className="flex justify-center items-center">{new Date(comment?.date).toLocaleDateString("fa-IR")}</div>
              <div className={styles.stars}>
                {new Array(comment?.star)?.fill(0)?.map((item, index) => (
                  <FaStar key={index} />
                ))}

                {new Array(5 - comment?.star)?.fill(0)?.map((item, index) => (
                  <FaRegStar key={index} />
                ))}
              </div>
            </div>
            <div>
            <p>{comment?.email}</p>
            </div>
            <div>
            <p>{comment?.username  + " : " + comment?.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comment;
