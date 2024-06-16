import Image from "next/image";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function getMenu() {
  const entries = await client.getEntries({ content_type: "recipe" });
  const mealsRes = entries.items.filter(
    (entry) => entry.fields.category === "meal"
  );
  const drinksRes = entries.items.filter(
    (entry) => entry.fields.category === "drink"
  );
  const pastryRes = entries.items.filter(
    (entry) => entry.fields.category === "pastry"
  );

  return {
    meals: mealsRes,
    drinks: drinksRes,
    pastries: pastryRes,
  };
}

export default async function Menu() {
  const { meals, drinks, pastries } = await getMenu();

  const renderItems = (items) =>
    items.map((item) => (
      <div key={item.sys.id} class="flex flex-col items-center mb-5">
        <div>
          <div>
            <Image
              src={`https:${item.fields.thumbnail.fields.file.url}`}
              width={200}
              height={200}
              class="object-cover w-40 h-40 items-center mx-auto"
            />
          </div>
          <h4 class="text-center font-medium my-2">{item.fields.title}</h4>
          <p class="text-pretty text-center">
            {item.fields.description.content
              .map((block) => block.content.map((text) => text.value).join(""))
              .join("\n")}
          </p>
        </div>
      </div>
    ));

  return (
    <article class="menu px-5">
      <h2 class=" text-xl font-bold">Our hit menu</h2>
      <p class=" text-base">
        Explore our diverse menu, carefully curated to delight every palate.
        Whether you crave classic comforts or adventurous flavors, our menu
        offers something special for everyone.
      </p>
      <div class="text-base my-4">
        <div>
          <h3 class="text-lg font-semibold mb-4">Meals</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {renderItems(meals)}
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Drinks</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {renderItems(drinks)}
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Pastries</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {renderItems(pastries)}
          </div>
        </div>
        <p class="text-xl text-right italic">And many more...</p>
      </div>
    </article>
  );
}
