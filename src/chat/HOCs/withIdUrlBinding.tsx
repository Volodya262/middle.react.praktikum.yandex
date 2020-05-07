import React from "react";
import {Route, RouteComponentProps, Switch} from "react-router-dom";
import {tryParseNumber} from "../../common/utils/try-parse-number";

/**
 * Параметры роутера
 */
interface RouterParams {
    /**
     * id объекта
     */
    id: string
}

/**
 * Пропсы, которые пробрасываются в оборачиваемый компонент (и, соответственно, должны у него быть)
 */
export interface InjectedIdProps {
    /**
     * id сущности
     */
    id: number | null;

    /**
     * Функция, которая записывает id сущности в url
     * @param id
     */
    idChangeHandler: (id: number) => void;
}

/**
 * Создает компонент, который биндится к урлу типа /-any-url-/:id
 * Использование: <Route path={'/chat'} component={ChatWithIdUrlBinding}/>
 * Оборачиваемому компоненту передаются пропсы id и idChangeHandler
 * Если в урле нет id, то передается null. Если в idChangeHandler будет передан некорректное значение, то ничего не произойдет
 * @param Component Оборачиваемый компонент. Должен иметь в себе пропсы id: number | null и idChangeHandler: (id: number) => void
 */
export const withIdUrlBinding = function <T extends InjectedIdProps>(Component: React.ComponentType<T>) {
    class IdUrlBindingWrapper extends React.PureComponent<RouteComponentProps & T> {
        pushIdToUrl = (id: string | number) => {
            if (tryParseNumber(id) != null) {
                this.props.history.push(`${this.props.match.url}/${id}`);
            } else {
                throw Error(`Cannot push invalid id ${id} to url`)
            }
        }

        tryParseIdFromUrl = (routeProps: RouteComponentProps<RouterParams>) => {
            const id = routeProps.match.params.id;
            return tryParseNumber(id);
        }

        render() {
            const baseUrl = this.props.match.url;
            const baseUrlWithId = `${this.props.match.url}/:id`;

            return (
                <Switch>
                    <Route exact path={baseUrl}
                           render={() => <Component {...this.props} idChangeHandler={this.pushIdToUrl}/>}/>
                    <Route exact path={baseUrlWithId}
                           render={(routeProps: RouteComponentProps<RouterParams>) =>
                               <Component {...this.props} id={this.tryParseIdFromUrl(routeProps)}
                                          idChangeHandler={this.pushIdToUrl}/>}
                    />
                </Switch>
            )
        }
    }

    return IdUrlBindingWrapper;
};