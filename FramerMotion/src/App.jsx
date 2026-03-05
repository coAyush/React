import React from "react";
import { motion,useScroll} from "framer-motion";

const App = () => {
  const {scrollYProgress}=useScroll()
  
  return (
    <>
      <motion.div className="fixed top-0 w-full left-0 origin-left h-4 bg-red-600 rounded-full"
      style={{scaleX:scrollYProgress}}
      ></motion.div>
      <div className="p-20">
        <motion.div
          className="w-[100px] h-[100px] bg-red-400 border-2 border-amber-100"
          whileTap={{ scale: 0.7 }}
          initial={{ x: 0, y: 0 }}
          whileHover={{ backgroundColor: "#60a5fa" }}
          drag
          dragConstraints={{
            top: 0,
            bottom: 700,
            left: 0,
            right: 700
          }}
          whileDrag={{
            scale: 1.2
          }}
          transition={{ ease: "anticipate" }}
        />
      </div>
      <motion.div className=" text-white text-2xl tracking-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quis? Eveniet, at deserunt iusto culpa sapiente ad 
        omnis molestiae libero dolorum, blanditiis eligendi, ut tenetur? Laboriosam fugiat illum dolores magnam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente quae rerum repudiandae ut officia tempora quia mollitia facilis ullam, ducimus eum consequuntur in perferendis vitae saepe labore illo, sint dicta. Vel, modi! Id facilis molestiae rerum sapiente incidunt voluptas eos reiciendis quasi doloribus vel, nesciunt quaerat iure! Itaque suscipit inventore ad, id repudiandae ipsam optio repellat vel omnis? Velit, sequi ut cupiditate consectetur unde dolorem id ea sint neque ipsam. Est nobis maxime delectus vel, unde qui veritatis similique atque, amet sit magni corporis pariatur minus, nesciunt voluptatibus quae porro! Commodi sequi consequatur accusantium eius voluptate vitae, debitis earum tempora incidunt non dignissimos repudiandae porro voluptatibus dolores distinctio totam obcaecati! Harum ea pariatur recusandae reprehenderit! Beatae voluptatum sunt cupiditate saepe iusto quisquam dolor iure suscipit illo laborum veritatis impedit quod a corrupti non omnis error doloribus obcaecati esse, aliquam cumque. Doloremque quos pariatur ullam natus ducimus minus. Qui, pariatur! Minima asperiores placeat tempore sunt recusandae atque fugiat! Ratione voluptatem provident rem eaque repellat tempore tenetur maxime quos? Ullam vitae minus iste ab minima veniam doloribus suscipit itaque ipsum laborum, rerum vel dignissimos modi esse error reprehenderit dolorem non neque ea laudantium exercitationem, dolorum natus cupiditate. Ab placeat eaque, possimus iste laboriosam voluptatum illum facilis quisquam ullam cum iure recusandae et in sint explicabo nemo, sed officiis reprehenderit nostrum mollitia, aut molestias aliquid assumenda omnis! Deserunt ab doloremque, veniam porro nostrum molestiae dolores tempora ipsa deleniti quae eaque cum harum fugiat quibusdam quidem maxime aperiam ut sint! Aut culpa maxime mollitia dolorem itaque a nihil consectetur sint praesentium ex in officiis quibusdam placeat saepe et dolores sed, cum laborum! Maiores at magnam architecto! Reiciendis voluptatem incidunt impedit illo? Debitis voluptatum dolorum nobis illum error autem odio in ipsam facilis tenetur, tempore iste perferendis cumque beatae laudantium rerum nam nisi. Libero asperiores officia unde quia eos. Perferendis iure ullam magnam atque. Veniam alias eos excepturi explicabo! Commodi expedita cum optio voluptatum pariatur ad tempore eligendi incidunt dolorem delectus, dicta modi aut dignissimos quo accusantium fuga recusandae laboriosam sed quisquam. Fuga tenetur quaerat nam ducimus hic earum quia iste cupiditate vitae quae! Assumenda dolore nesciunt sit in ipsa hic enim blanditiis illum voluptatibus sapiente placeat, maxime facilis reprehenderit, culpa distinctio iste! Tempora, quia perferendis perspiciatis et placeat facere cupiditate unde. Ut commodi saepe libero quibusdam optio quaerat deserunt vitae. Vel perferendis impedit nisi obcaecati iusto nobis odit deleniti. Velit et, quia dignissimos rerum maiores harum ullam, explicabo quam ratione dolorem beatae neque voluptatem perferendis nam cupiditate, culpa ut commodi! Consequatur cupiditate rem inventore reiciendis modi qui sunt? Illum cum facere, ipsam, ab quod quidem eaque quos omnis consequuntur temporibus aliquam saepe officiis ipsa placeat fuga. Quasi eius, consectetur saepe, tempore facilis ex non animi deleniti autem laborum fuga nobis officia fugiat? Repudiandae natus quasi, adipisci aut cum quae amet laborum. Eveniet consequuntur eius sequi, corporis fugiat veritatis doloremque nesciunt quo harum consectetur quidem esse consequatur labore numquam molestiae exercitationem laudantium nam maiores dolores expedita earum at iusto. Unde maiores asperiores quasi excepturi.
         </motion.div>

    </>
  );
};

export default App;