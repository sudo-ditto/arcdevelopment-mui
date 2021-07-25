import React from 'react';
import Header from '../components/ui/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../components/ui/Theme';
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/ui/Footer';
// Removes default margin for elements underneath
// E.g solves elements not expanding full width due to body margin
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/" component={() => <div>Home</div>} />
        <Route path="/services" component={() => <div>Services</div>} />
        <Route path="/customSoftware" component={() => <div>Custom Software</div>} />
        <Route path="/mobileapps" component={() => <div>Mobile Apps</div>} />
        <Route path="/websites" component={() => <div>Websites</div>} />
        <Route path="/revolution" component={() => <div>revolution</div>} />
        <Route path="/about" component={() => <div>About</div>} />
        <Route path="/contact" component={() => <div>Contact</div>} />
        <Route path="/estimate" component={() => <div>Estimate</div>} />
      </Switch>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis consectetur deleniti ab animi distinctio, repellendus ipsum quo earum ipsam, odio beatae iusto eligendi labore eaque doloremque. Voluptates, culpa porro?
      Qui illum dolor exercitationem dolorum nulla laudantium, voluptate ipsam, cum nostrum vel minus saepe aliquid cumque error similique eum nemo tempore tempora eligendi sint voluptas! Minima dolorem rem voluptate officia?
      Dolores minus doloribus repudiandae. Natus quisquam sapiente temporibus voluptas magnam magni laudantium nihil dignissimos quos ducimus voluptates, iusto dolor error adipisci perspiciatis. Commodi ipsam laudantium mollitia tempora rerum molestias saepe.
      Eveniet quam earum minus! Officia debitis error, nam sit laudantium assumenda, sunt similique repellat aspernatur obcaecati maxime quasi tempore laborum. Corporis ad possimus molestias rem tempora itaque magnam delectus doloribus!
      Labore dolorem iste impedit quaerat quod, excepturi beatae corrupti, consequuntur voluptatibus obcaecati neque necessitatibus mollitia quam debitis sit modi autem in temporibus maxime? Laboriosam, et est vitae animi quia aliquam.
      Repudiandae, quod veniam iusto quasi voluptatibus impedit. Provident ipsum odit accusantium, enim ab perspiciatis at quas, corrupti impedit dolorum deleniti itaque voluptate neque ipsa hic similique laudantium animi quam? Adipisci.
      Quasi animi culpa nesciunt, eos ipsam eveniet in recusandae nemo esse minus iusto rerum et maxime, distinctio similique aspernatur voluptatem adipisci atque! Nobis quia reiciendis excepturi. Voluptatum voluptas praesentium atque.
      Accusantium ut nostrum harum officia quae facere reprehenderit, rem odio et? Illo aliquam deleniti velit officia porro iusto animi nesciunt explicabo odit, magnam fuga, nulla dolor ut amet, placeat omnis.
      Consectetur placeat magnam quasi veritatis in perferendis commodi aut fuga aliquam a suscipit nihil praesentium molestiae, assumenda tenetur excepturi eligendi amet quis sunt ratione possimus beatae deleniti. Quisquam, nihil dolorem.
      Harum, reprehenderit dolores rem soluta animi atque? Ratione dolorum natus, cum blanditiis vero voluptas quae officia fuga voluptatem. Natus explicabo fugiat quibusdam nihil. Culpa quia molestias nulla velit voluptatibus repellendus?
      Quod necessitatibus deleniti soluta praesentium? At eaque quia, ipsam dignissimos odio facere modi minima, sapiente, expedita ut quo possimus reprehenderit quas repudiandae numquam doloribus minus dolorum aliquam nostrum nisi. Aperiam.
      Facere nemo qui, nesciunt minus temporibus cumque aperiam accusantium, autem ex quo facilis maiores sit? Officia sint, fugiat, beatae ex sed illo quo rerum possimus consectetur perferendis nam porro esse.
      Aliquam eius aut quasi, voluptatum molestiae omnis atque quo corporis reprehenderit ipsa odit neque labore voluptate velit fugit repudiandae fuga magni? Sapiente blanditiis aperiam ab qui omnis expedita porro incidunt.
      Debitis praesentium, nisi animi eos quibusdam modi voluptate itaque fuga quos dolor aliquam mollitia commodi explicabo laborum aspernatur rem qui architecto tempora rerum porro. Necessitatibus repellendus commodi placeat beatae repellat!
      Ipsa reprehenderit amet error explicabo assumenda dolor, sequi eos, animi vero fugit ipsam ratione magnam expedita eligendi magni vitae omnis non, tempore ab facere. Iusto quam in dignissimos dolorem aliquid!
      Odio autem provident commodi ipsam, laboriosam sit consequatur eaque eum maiores illum laudantium nam neque enim amet sed sint, molestias odit voluptatem impedit, delectus laborum voluptatibus magnam? Quia, fugit corporis!
      Dolorum quis quasi placeat ducimus. Aspernatur animi vitae deleniti, dolor hic natus recusandae, inventore pariatur corporis ullam illum numquam eligendi assumenda! Ea distinctio quaerat praesentium, exercitationem a id ullam explicabo.
      Possimus alias dolores laborum quam? Quae aliquam saepe sunt ab est eius vitae voluptatem suscipit odio voluptates minus tenetur hic accusamus, adipisci iusto explicabo nisi eaque inventore culpa. Ad, reprehenderit?
      Dolore soluta aliquid deleniti consequatur explicabo odio corrupti voluptas iste! Quis alias, sunt odit perferendis qui ad laborum dicta asperiores repellendus suscipit fuga ab sint, vitae molestiae odio et doloribus?
      Laboriosam at voluptatem quis explicabo earum fugiat iure ratione sit? Incidunt natus cupiditate eveniet enim. Maiores facere ad nobis ex, alias nihil officia explicabo, reiciendis cupiditate ab quia consequuntur dolor?
      Molestias explicabo, necessitatibus expedita earum, saepe quae fuga atque animi inventore eum nesciunt nihil dolores accusantium quidem asperiores beatae optio obcaecati ab. Corporis fugit molestiae sed recusandae obcaecati ducimus quos.
      Recusandae nemo iusto nam id distinctio laudantium quod nesciunt cumque maxime! Quae similique nesciunt suscipit distinctio recusandae facilis dicta nihil velit eveniet sunt ea consectetur consequatur, voluptates est modi deserunt?
      Fugiat quasi reprehenderit dolores animi aspernatur aliquam, exercitationem quas quae, necessitatibus vel similique obcaecati temporibus eum. Esse qui unde quam molestiae amet dicta aut. Eveniet eaque ad libero fugiat soluta.
      Aperiam officiis nemo ullam vel veritatis, harum eum inventore molestiae aut eos libero ut alias expedita debitis voluptatem voluptates. Enim, ad totam a ipsa hic officia reprehenderit laboriosam quam tenetur!
      Labore velit numquam odit est praesentium cupiditate ipsam, dolore fugiat reiciendis vitae officia enim, itaque vero consequatur perferendis quasi libero. Tempore nobis quo maiores labore laboriosam, perspiciatis odit explicabo esse!
      Quas voluptate modi perferendis explicabo, voluptatem impedit sequi ullam unde reprehenderit eaque dolore. Maxime ex voluptates dolorum consequatur id expedita dicta ad enim. Quaerat id quos possimus, libero cumque doloremque.
      Suscipit officia expedita architecto? Dolor laborum itaque placeat earum deleniti quod tenetur ad voluptatum? Aut atque eum corporis debitis aperiam accusamus doloremque iure. Molestiae totam labore non in itaque incidunt.
      Corrupti adipisci doloribus ea ipsa, nam maxime a et voluptates quos suscipit delectus odio ducimus odit provident accusantium quisquam, sint rem, ipsum fugit dolor. Ea et deserunt vero iste molestias.
      Earum eos optio nihil possimus molestiae ad, velit iste architecto distinctio suscipit, dolor pariatur recusandae illo impedit quibusdam nesciunt cum error explicabo voluptas neque, tempore quas enim corporis. Corporis, veritatis.
      Aspernatur earum labore, dolorem asperiores expedita aut similique minus unde rem consectetur? Neque nulla nobis voluptates sed maxime assumenda officiis nesciunt id similique expedita, fuga praesentium ex, minima error reiciendis.
      Laudantium nostrum error, dicta rem dolorem corrupti ut autem accusantium cumque tempora, nisi fugiat enim recusandae nulla vero, unde saepe a ipsum aliquam reiciendis architecto. Asperiores praesentium ab rerum quam.
      Ipsam iure culpa officia tempore sequi placeat iusto consectetur, laborum nam est possimus veniam vel hic excepturi facilis unde pariatur recusandae totam quibusdam quo illo sit soluta id! Voluptas, reprehenderit?
      Quis ullam veritatis placeat repellat maxime, accusamus rerum voluptatum ad quisquam facere maiores dignissimos quibusdam voluptatem corrupti possimus obcaecati nihil sint incidunt deserunt veniam asperiores! Error nihil quo optio vitae?
      Dolorum eius provident nulla quam error dolores inventore quibusdam expedita earum repellendus saepe perspiciatis sapiente itaque iusto, similique in sunt tempore ipsum illo maiores ducimus harum blanditiis voluptas veritatis. Facere?
      Nobis alias, officiis ad molestiae eos harum exercitationem quas. Deserunt officia sint similique quibusdam distinctio inventore reprehenderit, eum dignissimos suscipit fuga saepe minus asperiores possimus! Recusandae quo beatae eum quae?
      Deserunt iusto maiores earum minima consequatur iste. Asperiores aliquid eveniet officia ducimus obcaecati mollitia. Assumenda harum magnam autem recusandae ab, exercitationem ex reprehenderit accusantium totam rerum debitis laudantium, repudiandae iusto?
      Exercitationem cupiditate tempora molestiae, soluta expedita, nulla vero quisquam voluptates animi autem, iure unde. Dolores possimus similique dignissimos fugiat aliquam accusamus laborum veritatis deserunt, sunt quam explicabo dolor ipsa totam.
      A aperiam maiores labore, suscipit molestias, aspernatur iusto sed, inventore fuga dolores hic necessitatibus accusamus pariatur corrupti possimus enim. Id officia, quia dolor eos dolorem delectus quaerat unde cumque! Exercitationem!
      Reprehenderit amet vero, voluptate quae nesciunt corrupti eveniet veniam quo possimus inventore deserunt nihil tempora accusamus quidem nostrum nemo. Nulla explicabo fuga excepturi eius ipsum aut dolore temporibus neque distinctio.
      Consequatur ea porro maxime animi laborum deserunt quod magni illum, id officiis labore, facere est amet nostrum? Nobis repudiandae quaerat, quidem unde molestiae eos, natus pariatur dolor at ad esse.
      Ratione exercitationem iure esse, voluptatibus voluptatem provident laboriosam tempore minus culpa, adipisci minima omnis aperiam, aut fuga excepturi nobis deserunt sunt? Architecto molestias reprehenderit suscipit atque soluta quos amet consequuntur?
      Distinctio, ipsam quisquam. Ad totam sit rerum consequuntur perspiciatis fugit ipsum libero? Qui pariatur, ab illum eaque est quidem, magnam itaque sint voluptatem expedita corporis numquam eum accusantium quibusdam vel?
      Itaque consectetur illo ullam nobis tempora? Odit accusamus, placeat dolorum quidem minima voluptas voluptatem fugit quo, blanditiis totam animi adipisci est rem perferendis, vel magnam et sed consequatur. Ipsam, repellat!
      Alias est hic, totam dolor ut recusandae perferendis, nihil dolores fugit optio et, fugiat nobis rem distinctio soluta voluptatum dolorum? Exercitationem illo aspernatur dolorum odio molestiae quo assumenda itaque eos.
      Tenetur nihil quibusdam aspernatur nostrum sed cumque alias laboriosam, adipisci quos exercitationem, mollitia impedit maxime ex. Voluptatum, a veritatis! Libero itaque sequi consectetur delectus ullam ducimus a accusamus nostrum eligendi?
      Aperiam eius reprehenderit in dolorem? Praesentium ducimus facilis, in a velit voluptate accusamus temporibus voluptatem nostrum laudantium neque distinctio perspiciatis iste aut! Voluptatibus tenetur fugit ratione molestias accusamus, similique natus?
      Porro voluptatum optio laborum consequatur itaque deserunt reprehenderit quo soluta dolore, nam distinctio eligendi quidem cum, dignissimos autem animi earum! Adipisci sequi commodi ullam nesciunt tempora quibusdam perspiciatis dolorem corrupti.
      Nobis omnis nesciunt, quasi placeat numquam molestias quisquam modi excepturi eum suscipit molestiae libero fugiat labore sapiente possimus consectetur cumque minima distinctio architecto doloremque expedita dolorem? Repudiandae tenetur excepturi sapiente!
      Rem asperiores perferendis cum officiis, voluptatibus ea sapiente sequi ipsum reiciendis eum. Aliquid laboriosam eum incidunt ratione? Illo eligendi, ea molestiae quidem vitae veniam vel, distinctio voluptas magnam, modi ex?
      Commodi voluptate officia assumenda. Autem distinctio tempora culpa ipsum optio laborum, repellat corporis minus excepturi eligendi quas ipsam facere assumenda nisi odio harum quae delectus sint? Non rem quos atque.
      Temporibus deleniti possimus aliquid! Delectus, at, atque in facere vitae, quos accusamus eligendi inventore cum sequi tempora. Quibusdam praesentium debitis tempore odio in, ratione, asperiores doloremque perspiciatis et ex officia!
      Pariatur recusandae at dignissimos velit, quo voluptates consequuntur alias excepturi minus et, nisi aspernatur possimus modi veniam quod libero harum nihil nemo, laudantium ipsam corporis. Sapiente deserunt atque sed error?
      Recusandae sint maiores molestiae ipsum velit sapiente, alias facere quos repudiandae neque autem porro possimus similique perferendis. Ab impedit exercitationem ipsum nobis, molestiae nemo quos quae maxime, deserunt libero earum.
      Voluptas ut aliquam consequatur velit eveniet provident rerum amet laudantium, maiores iusto dolor culpa quos! Distinctio, ullam sit. Amet nesciunt enim commodi reprehenderit nobis fugit eveniet laudantium itaque vero repellendus?
      Iure, in numquam deserunt sit ducimus quidem assumenda ipsam culpa recusandae facere rerum, hic dolorum consectetur vero atque libero, temporibus illum accusantium qui voluptatibus cumque laboriosam. Voluptatem recusandae laborum vitae.
      Maiores, corporis fuga! Nobis veniam id, magni excepturi quasi doloremque eius est! Culpa similique perspiciatis aliquid porro maiores repellendus quod doloremque, quas ipsum illo quisquam ratione suscipit quo asperiores nostrum?
      Magni doloribus aperiam optio, obcaecati autem atque dolores, ipsam illum nesciunt ipsum doloremque repellat asperiores nihil unde dignissimos exercitationem debitis. Perspiciatis, doloremque? Doloremque asperiores, qui sit in sequi expedita omnis!
      In reprehenderit optio natus alias ratione numquam blanditiis maxime vero odio voluptatibus illum itaque quas unde eos quo ducimus tempore, cum laborum corrupti sint! Ipsa ullam alias officia beatae ratione?
      Sunt, repellat eius. Voluptas nesciunt, deleniti quaerat ipsam reprehenderit labore veniam? Nulla reprehenderit iste in fuga earum architecto accusamus sit a unde! Quas ab tempore quia dolorum, quam voluptate accusamus.
      Cum necessitatibus nulla molestias qui aliquam, facere tempora inventore ex ad optio. Asperiores minima ipsa voluptatibus excepturi voluptatem assumenda error eveniet ab eum. Dolor omnis eos distinctio impedit possimus quisquam.
      Labore, doloremque. Voluptates quia dolorum dolorem in corporis, cumque deleniti, error expedita voluptate, earum ipsam quos illum neque iusto rem alias facere optio perferendis veniam non nostrum! Ab, neque nam.
      Optio illum maiores dicta eius qui, ipsam sapiente. Aspernatur voluptates doloremque unde tenetur magni beatae quasi qui officia dolore perspiciatis? Consectetur, rerum. Autem quas voluptas, accusantium harum aspernatur consectetur vero.
      Officia magnam consequuntur vero possimus, molestias eaque eius delectus provident consectetur aliquid nihil nisi necessitatibus corporis, nam cum voluptas quasi. Eius minima optio aspernatur necessitatibus, itaque quaerat quas incidunt et.
      Eius accusamus, perferendis tenetur odit aperiam excepturi at rerum aut numquam autem mollitia provident eaque, animi laborum est corporis placeat nesciunt? Quisquam obcaecati ad error adipisci corporis rem dolores optio!
      Officia laudantium, voluptatem nam consequatur cum accusantium quia quis earum delectus modi laborum at adipisci accusamus alias rem cumque illo, ipsum aut, consectetur et optio consequuntur quos suscipit labore. Accusantium?
      Ipsa laborum delectus maiores provident nisi exercitationem in voluptatibus, nobis necessitatibus vel atque ipsum molestiae totam temporibus, neque magnam est. Aperiam architecto in ducimus unde fugit. Dolorum libero totam minima?
      Recusandae repellat facilis temporibus harum mollitia nihil ut a delectus aut iusto possimus dolorem sed, officiis veniam quibusdam. Nam vel et quaerat aut facere ducimus explicabo cum asperiores quibusdam quia.
      Quasi corrupti eveniet voluptates similique dicta dignissimos, eum fugit rerum iste omnis quae adipisci, magni modi, enim perspiciatis at. Incidunt ducimus neque dolore animi ad aut maxime facere, atque doloremque.
      Sapiente, aliquid? Illo, ad reprehenderit architecto ea enim dolorem suscipit consequuntur, et id ab laborum ipsum iure cumque. At reprehenderit tempora itaque officiis quisquam sequi similique perferendis voluptates deleniti repellendus!
      Ipsam praesentium, magnam deleniti alias obcaecati quo sequi nemo, similique rem cupiditate esse, explicabo in repellendus ipsum molestiae iusto sunt ex. Nihil illum explicabo nam molestias corrupti delectus, provident mollitia!
      Nostrum deserunt inventore, veritatis dolorum, distinctio sit neque sunt et incidunt ipsam ipsum hic earum praesentium officia reprehenderit. Ullam voluptas eos tempore a explicabo praesentium, similique rerum culpa repudiandae error!
      Eum mollitia nisi id excepturi quod quo voluptas temporibus, placeat, provident quasi enim similique officiis cupiditate quos officia maiores animi amet. Pariatur adipisci odio unde tenetur accusamus debitis ab asperiores.
      Corporis, assumenda quasi? Voluptates dolores eveniet facilis deserunt quas possimus deleniti magnam praesentium officia est suscipit quaerat aut, similique sunt, porro minima sequi explicabo necessitatibus rem. Dolore iste sit quam!
      Tenetur iste vero ullam, nam dignissimos esse praesentium libero! Aliquid temporibus qui quod voluptatum, suscipit ab reiciendis illo a adipisci tenetur nesciunt eaque maxime. Dignissimos laborum reprehenderit distinctio voluptatum sapiente?
      Harum ipsum eveniet repellat voluptate blanditiis recusandae reiciendis quidem perferendis? Ipsam consectetur voluptatem tenetur architecto, fugiat dolorum. Veniam consequuntur libero ad soluta delectus repellendus in illum nam! Impedit, nisi. Quae?
      Suscipit, reiciendis quis asperiores tempore provident amet id unde quas explicabo libero molestias animi soluta, a accusantium fugiat, velit quos magnam commodi? Beatae ea facere itaque ipsum, deleniti voluptas magnam?
      Voluptatum, deleniti. Harum id odio tempore rerum aut repellendus optio ullam pariatur deserunt deleniti, dolorum consequatur amet vel odit eos nulla, neque numquam molestias beatae, delectus ipsum molestiae facilis. Pariatur.
      Sequi praesentium repellat, eveniet laboriosam accusamus soluta numquam ut. Corporis quam voluptatem amet minus delectus voluptates, maxime veritatis architecto animi asperiores corrupti ipsam placeat nam officia unde possimus dicta earum.
      Sed quae perferendis, possimus ad, velit aut porro nulla repellendus, nesciunt perspiciatis consequuntur officia laborum facilis error? Culpa eveniet vel nesciunt sint, aperiam debitis ut soluta alias? Asperiores, optio illum!
      Reiciendis eius aspernatur eaque dolorum distinctio deserunt iste molestiae, similique magni, tempore repudiandae quod ea quae cupiditate maiores error inventore, corrupti veritatis earum asperiores vero. Beatae adipisci eveniet iste quam?
      Sapiente magnam iure cum atque, modi reiciendis est pariatur, consequuntur voluptate neque molestiae? Reiciendis sit voluptate fugit possimus molestias debitis esse eaque voluptates sapiente magnam repudiandae ipsam, illum magni exercitationem!
      Earum officia quidem commodi quaerat qui ipsa, sed distinctio neque nemo delectus saepe ea similique ipsum quas et doloremque iste? Officia delectus dignissimos corrupti atque nesciunt assumenda hic provident nostrum!
      Cumque ducimus culpa nostrum, autem ea dolores necessitatibus itaque distinctio consequatur aut doloribus dolor provident ab quasi dicta quaerat, totam aperiam. Officiis pariatur velit repudiandae incidunt maxime unde veritatis odio!
      Nulla ratione, sint tempora error rem laborum, sequi qui eos quidem modi mollitia? Ullam, similique cupiditate! Inventore eaque sed distinctio, ab assumenda culpa iure perferendis quae repellendus illo, quam quis?
      Quibusdam unde delectus illum soluta, exercitationem fugit voluptates perspiciatis saepe. Temporibus, itaque! Incidunt, nam a placeat totam commodi consequatur vel dolor error nesciunt, voluptas, excepturi sit velit ipsum sint necessitatibus.
      Exercitationem pariatur voluptates deleniti aspernatur tempora! Sequi nulla error pariatur maxime animi exercitationem illum quas dolore quibusdam, possimus vel sint consequatur excepturi a consequuntur qui repudiandae expedita libero ullam voluptatum.
      Aspernatur odit dolorem cupiditate laudantium eius iure est ipsa exercitationem, error reprehenderit modi commodi deserunt. Asperiores voluptas ullam fugit illum minus doloremque non aliquid illo. At vitae provident alias neque!
      Dicta, minima repellat molestias dolore iste sunt voluptas nisi, perspiciatis perferendis dolores provident, ea amet necessitatibus aliquid labore eaque? Consectetur ratione fugiat eum, praesentium maiores porro repellat expedita dolor. Voluptatem?
      Recusandae consectetur quibusdam culpa, quos perferendis officiis alias modi totam explicabo numquam aliquam consequuntur ratione voluptates eveniet mollitia at. Rem corporis perferendis dicta placeat sit cupiditate ut optio, vitae quia?
      Dolor, doloribus quibusdam dignissimos ut autem, ea optio asperiores perspiciatis assumenda libero beatae corrupti quae, reiciendis dolore quaerat eaque. Dolor veniam asperiores ex consectetur ab officiis nobis molestias. Itaque, quidem.
      Nam deserunt quod necessitatibus iure magnam voluptate, quidem corrupti quos consequatur natus quae eos amet, possimus eum voluptatibus ratione in corporis. Veniam non neque sint, aspernatur debitis consequuntur placeat eligendi.
      Dolore illum expedita, veritatis voluptate assumenda dicta delectus sit itaque ex cum at? Cupiditate tempore dolor, autem harum quidem repellendus, similique sunt suscipit consequatur cumque officia adipisci voluptatum labore reprehenderit.
      Nobis neque recusandae doloremque vel consequuntur voluptates harum quo molestias, autem quas consequatur maxime esse eum similique iusto delectus itaque, magnam aperiam molestiae, explicabo soluta nam pariatur sint? Eaque, ipsum?
      Impedit, autem porro magni corporis nesciunt inventore expedita voluptatum asperiores optio ipsam dolor nam nemo possimus commodi dolorum reprehenderit consectetur iste voluptas perspiciatis? Vel aperiam fuga corrupti magnam unde mollitia.
      Commodi tempora provident quo nemo laboriosam rem, deleniti mollitia non tenetur aliquid eveniet sunt rerum consectetur temporibus deserunt veniam cumque esse ipsa. Provident laborum a amet consequuntur tempore eaque ducimus?
      Amet, vero autem deserunt illum provident mollitia placeat, consequuntur, corporis minima eum odit. Repellendus dolor iusto sunt autem quas amet molestias porro ex soluta nihil vero explicabo deserunt, labore tempore?
      Neque voluptates officia veritatis quisquam quam sint iusto voluptatum ad doloribus soluta id libero vitae porro, quidem eligendi optio quod reprehenderit totam eum. Quas possimus dolorem similique excepturi eligendi provident!
      Consequuntur labore natus, delectus eligendi, deleniti ad esse molestias reiciendis quia porro magni atque, officiis aliquid ratione nihil quidem qui! Facere alias veniam consectetur voluptatem, natus accusantium dolores magnam necessitatibus?
      Earum deserunt repellendus enim, quasi necessitatibus ipsa eaque. Error nesciunt exercitationem aut pariatur consequuntur dolore odio, enim quidem sapiente? Id quam deleniti ducimus dignissimos nihil, consequatur facilis hic dolor sed.
      Ab ad sequi odit sit numquam, quod, excepturi, nesciunt laudantium sapiente vitae expedita blanditiis obcaecati nemo veritatis rem eveniet ratione quidem consequatur repellat aliquid fuga. Ratione a aliquid inventore modi.</p>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
